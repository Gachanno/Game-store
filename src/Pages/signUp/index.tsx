import Logo from "@/src/Entities/logo"
import c from "./style.module.scss";
import { Link } from "@tanstack/react-router";
import InputForm from "@/src/Shared/ui/inputForm";

const SignUp = () => {
  return (
    <main className={c['main']}>
      <div className={c.main__img}>
        <Logo/>
      </div>
      <h1>Создайте свой аккаунт в Gamecamo</h1>
      <form className={c.main__form}>
        <InputForm type="text" placeholder="Имя пользователя"/>
        <InputForm type="email" placeholder="Электронная почта"/>
        <InputForm type="password" placeholder="Пароль"/>
        <InputForm type="submit"/>
      </form>
      <span>У вас уже есть аккаунт?</span>
      <Link to="/signIn">Войти</Link>
    </main>
  )
}

export default SignUp