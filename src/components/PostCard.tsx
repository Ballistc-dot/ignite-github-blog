import { useNavigate } from 'react-router-dom'
import { formatDateToRelative } from '../utils/formatDateToRelative'

interface Post {
  title: string
  body: string
  created_at: string
  number: string
}

interface PostCardProps {
  post: Post
}

export function PostCard(props: PostCardProps) {
  // eslint-disable-next-line camelcase
  const { title, body, created_at, number: postId } = props.post
  const navigate = useNavigate()

  function handlePostClick() {
    navigate(`/post/${postId}`)
  }

  const formmatedDate = formatDateToRelative(created_at)

  return (
    <div
      onClick={handlePostClick}
      className="overflow-ellipsis w-full bg-slate-700 h-[16.25rem] rounded-[10px] p-8 flex flex-col"
    >
      <header className="flex justify-between">
        <h3 className="max-w-[15rem] leading-[160%] text-slate-100 text-title-m font-bold">
          {title}
        </h3>
        <span className="text-slate-400 text-text-s ">{formmatedDate}</span>
      </header>
      <p className="mt-5 text-text-m text-slate-300 overflow-ellipsis text-over">
        {body}
      </p>
    </div>
  )
}
