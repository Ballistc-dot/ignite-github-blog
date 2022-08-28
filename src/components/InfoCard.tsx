import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faCalendarDay,
  faComment,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type InfoType =
  | 'github'
  | 'followers'
  | 'organization'
  | 'comments'
  | 'createdAt'

interface InfoCardProps {
  name: string | number
  type: InfoType
}

const IconTypes = {
  github: faGithub,
  followers: faUserGroup,
  organization: faBuilding,
  comments: faComment,
  createdAt: faCalendarDay,
}

export function InfoCard({ name, type }: InfoCardProps) {
  return (
    <div className="flex items-center sm:gap-2">
      <FontAwesomeIcon
        icon={IconTypes[type]}
        color="#3A536B"
        className="w-[1.125rem]"
      />
      <span className="text-slate-100 text-xs sm:text-text-s">
        {name} {type === 'followers' && 'Seguidores'}
        {type === 'comments' && 'comentários'}
      </span>
    </div>
  )
}
