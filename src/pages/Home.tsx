/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { AuthorInfo } from '../components/AuthorInfo'
import { PostCard } from '../components/PostCard'
import { api } from '../services/api'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export interface IUserProfile {
  name: string
  login: string
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
}
interface IPosts {
  title: string
  body: string
  created_at: string
  number: string
}

const SearchPostSchema = zod.object({ query: zod.string() })

type SearchPostProps = zod.infer<typeof SearchPostSchema>

const username = import.meta.env.VITE_GITHUB_USER
const repo = import.meta.env.VITE_GITHUB_REPO

export function Home() {
  const [profile, setProfile] = useState<IUserProfile>({} as IUserProfile)
  const [posts, setPosts] = useState<IPosts[]>([])

  const { register, handleSubmit } = useForm<SearchPostProps>({
    resolver: zodResolver(SearchPostSchema),
  })

  async function fetchingPosts() {
    const response = await api.get<IPosts[]>(
      '/repos/ballistc-dot/ignite-github-blog/issues',
    )
    const postsData = response.data

    const postData = postsData.map((data) => {
      return {
        body: data.body,
        created_at: data.created_at,
        title: data.title,
        number: data.number,
      }
    })

    setPosts(postData)
  }

  async function fetchingProfile() {
    const response = await api.get<IUserProfile>(`/users/${username}`)

    const { avatar_url, bio, company, followers, html_url, name, login } =
      response.data

    const userProfile: IUserProfile = {
      avatar_url,
      bio,
      company,
      followers,
      html_url,
      name,
      login,
    }
    setProfile(userProfile)
  }
  function getData() {
    fetchingProfile()
    fetchingPosts()
  }

  async function searchingPosts(data: SearchPostProps) {
    const response = await api.get(
      `/search/issues?q=${data.query}%20repo:${username}/${repo}`,
    )
    const postsData = response.data.items
    const postData = postsData.map((data: IPosts) => {
      return {
        body: data.body,
        created_at: data.created_at,
        title: data.title,
        number: data.number,
      }
    })

    setPosts(postData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="flex flex-col max-w-[54rem] sm:mx-auto px-4 lg:px-0 cursor-pointer">
      <AuthorInfo profile={profile} />
      <div className="flex mt-36 flex-col">
        <div className="flex flex-col flex-1">
          <header className="flex justify-between">
            <h3 className="text-slate-200 font-bold">Publicações</h3>
            <span className="text-slate-400"> {posts.length} publicações</span>
          </header>
          <form onSubmit={handleSubmit(searchingPosts)}>
            <input
              type="text"
              placeholder="Buscar conteúdo"
              {...register('query')}
              className="w-full p-4 rounded-md border border-slate-600 border-solid bg-slate-950 mt-3 text-slate-300 placeholder:text-slate-500"
            />
          </form>
        </div>
        <section className="grid sm:grid-cols-[repeat(2,1fr)] grid-cols-[1fr] gap-8 py-12">
          {posts &&
            posts.map((post) => <PostCard key={post.created_at} post={post} />)}
        </section>
      </div>
    </div>
  )
}
