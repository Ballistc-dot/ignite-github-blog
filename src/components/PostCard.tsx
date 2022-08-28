interface PostCardProps {
  title?: string
  preview?: string
  createdAt?: string
}

export function PostCard(props?: PostCardProps) {
  const { title, preview, createdAt } = props
  return (
    <div className="w-full bg-slate-700 h-[16.25rem] rounded-[10px] p-8 flex flex-col">
      <header className="flex justify-between">
        <h3 className="max-w-[15rem] leading-[160%] text-slate-100 text-title-m font-bold">
          JavaScript data types and data structures
        </h3>
        <span className="text-slate-400 text-text-s ">Há 1 dia</span>
      </header>
      <p className="mt-5 text-text-m text-slate-300 ">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </p>
    </div>
  )
}
