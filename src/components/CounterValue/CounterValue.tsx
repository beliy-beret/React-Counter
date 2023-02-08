import { CounterType } from '../../App'
import { FC } from 'react'
import s from './style.module.css'

type ComponentPropsType = {
  counter: CounterType
  errorMessage: string
  isEdit: boolean
}

const CounterValue: FC<ComponentPropsType> = ({ counter, errorMessage, isEdit }) => {
  const className =
    s.container +
    ' ' +
    (counter.current >= counter.max && s.noLimit) +
    ' ' +
    (errorMessage ? s.noLimit : '') +
    ' ' +
    (isEdit && '')

  const getValue = () => {
    if (errorMessage) {
      return <span className={s.message}>{errorMessage}</span>
    } else if (isEdit) {
      return <span className={s.message}>Enter value and press `set`</span>
    } else {
      return <span className={s.value}>{counter.current}</span>
    }
  }

  return <div className={className}>{getValue()}</div>
}

export default CounterValue
