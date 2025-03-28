import c from './style.module.scss'
import logo from './assets/Gamecamo.svg'
import { Link, useLocation } from '@tanstack/react-router'


const Navigation = () => {
  const { pathname } = useLocation()
  

  return (
    <>
    <Link to="/" className={c.logo}>
        <img src={logo} alt="Перейти на главную старницу" />
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
      <Link to="/" className={c.registration}>
        Войти
      </Link>
    </div>
    </>
  )
}

export default Navigation