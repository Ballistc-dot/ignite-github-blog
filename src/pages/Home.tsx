/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { AuthorInfo } from '../components/AuthorInfo'
import { PostCard } from '../components/PostCard'
import { api } from '../services/api'

export interface UserProfile {
  name: string
  login: string
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
}

export function Home() {
  const [profile, setProfile] = useState<UserProfile>({} as UserProfile)

  async function fetchingProfile() {
    const response = await api.get<UserProfile>('/users/ballistc-dot')

    const { avatar_url, bio, company, followers, html_url, name, login } =
      response.data

    const userProfile: UserProfile = {
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

  useEffect(() => {
    fetchingProfile()
  }, [])

  return (
    <div className="flex flex-col max-w-[54rem] sm:mx-auto px-4 lg:px-0">
      <AuthorInfo profile={profile} />
      <div className="flex mt-36 flex-col">
        <div className="flex flex-col flex-1">
          <header className="flex justify-between">
            <h3 className="text-slate-200 font-bold">Publicações</h3>
            <span className="text-slate-400"> 6 publicações</span>
          </header>
          <input
            type="text"
            name="a"
            placeholder="Buscar conteúdo"
            id=""
            className="w-full p-4 rounded-md border border-slate-600 border-solid bg-slate-950 mt-3 text-slate-300 placeholder:text-slate-500"
          />
        </div>
        <section className="grid sm:grid-cols-[repeat(2,1fr)] grid-cols-[1fr] gap-8 py-12">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </div>
    </div>
  )
}
