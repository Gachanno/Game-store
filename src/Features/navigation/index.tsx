import Logo from '@/src/Entities/logo'
import c from './style.module.scss'
import { Link, useLocation } from '@tanstack/react-router'


const Navigation = () => {
  const { pathname } = useLocation()
  

  return (
    <>
    <Link to="/" className={c.logo}>
        <Logo/>
    </Link>
    <nav>
      <ul className={c.nav__list}>
        <li className={`${c.nav__item}
        ${pathname === "/"
          ?
            c['nav__item--active']
          :
            ''}`}>
          <Link to="/">Магазин</Link>
        </li>
        <li className={`${c.nav__item}
        ${pathname === "/about-us"
          ?
            c['nav__item--active']
          :
            ''}`}>
          <Link to="/about-us" className={c.nav__link}>О нас</Link>
        </li>
        <li className={`${c.nav__item}
        ${pathname === "/support"
          ?
            c['nav__item--active']
          :
            ''}`}>
          <Link to="/support">Поддежрка</Link>
        </li>
      </ul>
    </nav>
    <div className={c["right-wrapper"]}>
      <Link to="/" className={c.search} title="Поиск"></Link>
      <Link to="/signUp" className={c.registration}>
        Войти
      </Link>
    </div>
    </>
  )
}

export default Navigation