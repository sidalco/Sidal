import './NavListMenuLogo.css'
import spng from './NavListMenuLogo.png'
import { Link } from 'react-router-dom'


const NavListMenuLogo = () => {
  return (
    <Link className='NavListMenuLogo' to="/">
        <img src={spng} alt='Logo'></img>
    </Link>
  )
}

export default NavListMenuLogo