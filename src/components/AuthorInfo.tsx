/* eslint-disable camelcase */
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IUserProfile } from '../pages/Home'
import { InfoCard } from './InfoCard'

type InfoCardTypes = 'followers' | 'github' | 'organization'

type AuthorInfoProps = {
  profile: IUserProfile
}

export function AuthorInfo(props: AuthorInfoProps) {
  const { avatar_url, bio, company, followers, html_url, name, login } =
    props.profile
  const info = {
    github: login,
    organization: company ?? 'Em busca',
    followers,
  }
  return (
    <div className="lg:w-[54rem] bg-slate-800 sm:h-52 mx-auto my-[-5rem] rounded-[10px] sm:py-8 sm:px-10 py-2 px-2">
      <div className="flex items-center sm:items-[none] gap-2 sm:gap-8 h-full">
        <img
          src={avatar_url}
          alt="avatar"
          className="sm:w-[9.25rem] sm:h-[9.25rem] w-[5rem] h-[5rem] rounded-lg"
        />
        <div className="flex flex-col w-full sm:gap-2 h-full">
          <header className="flex mt-2 justify-between items-center">
            <h2 className="text-slate-100 font-bold text-base sm:text-title-l">
              {name}
            </h2>
            <div className="flex gap-2 text-blue-400 text-xs font-bold">
              <a href={html_url}>GITHUB</a>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </header>
          <div className="flex flex-col h-full justify-between">
            <p className="text-slate-300 text-xs sm:text-text-m leading-[160%]">
              {bio}
            </p>
            <footer className="flex gap-4">
              {Object.entries(info).map((info) => (
                <InfoCard
                  key={info[0]}
                  name={info[1]}
                  type={info[0] as InfoCardTypes}
                />
              ))}
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
