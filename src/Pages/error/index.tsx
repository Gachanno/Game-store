import c from './style.module.scss'

const Error = () => {
  return (
    <h1 className={c['error-title']}>
        Ошибка 404 - Такой страницы не существует
    </h1>
  )
}

export default Error