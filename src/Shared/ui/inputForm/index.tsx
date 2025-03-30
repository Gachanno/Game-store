import { IPropsInput } from "../../types/types"
import c from './style.module.scss'

const InputForm = ({type, value, placeholder}:IPropsInput) => {
    return (
        <input required type={type} value={value} placeholder={placeholder} className={c.input}/>
    )
}

export default InputForm