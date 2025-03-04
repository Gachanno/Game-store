import ButtonNav from '../../Shared/ButtonNav/ButtonNav'
import NavLog from '../../Shared/Navlogo/NavLog'
import classes from './header.module.scss'

const Header = () => {
    return (
        <header className={classes.header}>
            <NavLog/>
            <nav className={classes.header__nav}>
                <ButtonNav text='Магазин' linkText='#'/>
                <ButtonNav text='О нас' linkText='#'/>
                <ButtonNav text='Поддежрка' linkText='#'/>
            </nav>
        </header>
    )
}

export default Header