import {
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { InfoCard } from './InfoCard'

export function PostInfo() {
  return (
    <div className="lg:w-[54rem] h-[10.5rem] bg-slate-800 mx-auto mt-[-5.25rem] rounded-[10px] sm:p-8 p-2 w-full">
      <header className="flex justify-between">
        <Link
          to="/"
          className="text-blue-400 gap-2 flex items-center font-bold text-xs leading-[160%]"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>
        <a
          href=""
          className="text-blue-400 gap-2 flex items-center font-bold text-xs leading-[160%]"
        >
          <span>VER NO GITHUB </span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>

      <div className="flex flex-col mt-5">
        <h1 className="text-title-l text-slate-100 font-bold">
          JavaScript data types and data structures
        </h1>
        <div className="flex mt-2 gap-8">
          <InfoCard name="ballistc-dot" type="github" />
          <InfoCard name="Há 1 dia" type="createdAt" />
          <InfoCard name="5 Comentários" type="comments" />
        </div>
      </div>
    </div>
  )
}
