import s from './Button.module.css'

type PropsType = {
    name: string
    onClick: () => void
    count?: number
    disabled?: boolean  // count === 5
    error?:string
}

export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        if(!props.disabled) {
            props.onClick()
            return
        }
        return
    }
    return (
        <div className=
                 {props.count === 0 ? `${s.btn} + ${s.inactive}` : props.disabled ? `${s.btn} + ${s.diss}` : s.btn}
             onClick={onClickHandler}>
            {props.name}
        </div>
    )
}