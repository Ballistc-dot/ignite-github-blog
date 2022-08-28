import { useEffect, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { PostInfo } from '../components/PostInfo'
import { api } from '../services/api'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

SyntaxHighlighter.registerLanguage('javascript', js)

interface IPost {
  title: string
  body: string
  username: string
  createdAt: string
  comments: number
  url: string
}

export function Post() {
  const [post, setPost] = useState<IPost>({} as IPost)
  const { id } = useParams()

  async function fetchingPost() {
    const response = await api.get(
      `/repos/ballistc-dot/ignite-github-blog/issues/${id}`,
    )
    const {
      title,
      body,
      created_at: createdAt,
      comments,
      user: { login: username },
      html_url: url,
    } = response.data
    const postData = { title, body, createdAt, comments, username, url }

    setPost(postData)
  }

  useEffect(() => {
    fetchingPost()
  }, [])

  if (Object.keys(post).length === 0)
    return <p className="text-center text-slate-50">loading...</p>

  return (
    <div className="flex flex-col max-w-[54rem] sm:mx-auto px-4 lg:px-0">
      {Object.keys(post).length > 0 && (
        <PostInfo
          comments={post.comments}
          createdAt={post.createdAt}
          username={post.username}
          title={post.title}
          url={post.url}
        />
      )}
      <section>
        <ReactMarkdown
          className="select-none gap-4 flex flex-col text-slate-100 mt-10 [&>*:nth-child(2)]:text-blue-400 [&>*:nth-child(2)]:font-bold [&>*:nth-child(2)]:underline [&>*:nth-child(2)]:mt-9"
          // eslint-disable-next-line react/no-children-prop
          children={post.body}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  className="bg-slate-50"
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, '')}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
      </section>
    </div>
  )
}
