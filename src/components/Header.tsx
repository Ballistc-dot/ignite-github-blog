import logo from '../assets/Logo.svg'

export function Header() {
  return (
    <div className="bg-header-background w-full h-72 sm:bg-cover sm:bg-center bg-clip-content flex items-center justify-around flex-col">
      <img src={logo} alt="github blog logo" className="mb-14" />
    </div>
  )
}
