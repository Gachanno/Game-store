import Navigation from '../../Features/navigation'
import classes from './header.module.scss'


const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <Navigation/>
            </header>
        </>

    )
}

export default Header