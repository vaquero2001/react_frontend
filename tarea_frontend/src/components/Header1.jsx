import logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header1 = () => {
  return (
    <header className="flex place-content-between items-center mb-14 ">
      <img src={logo} alt="alt" />
      <NavBar/>
    </header>
  )
}

