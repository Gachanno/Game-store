import classes from './NavLogo.module.scss'
import logo from '../assets/Gamecamo.svg'

const NavLog = () => {
  return (
    <a href="" className={classes.logo}>
        <img src={logo} alt="Перейти на главную старницу" />
    </a>
  )
}

export default NavLog