import classes from './buttonNav.module.scss'

interface IbuttonProps{
    linkText: string,
    text: string
}

const ButtonNav: React.FC<IbuttonProps> = ({linkText, text}) => {
  return (
    <a href={linkText} className={classes.nav__link}>
        {text}
    </a>
  )
}

export default ButtonNav