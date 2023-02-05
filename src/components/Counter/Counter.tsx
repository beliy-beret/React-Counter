import { CounterType } from '../../App'
import CounterValue from '../CounterValue/CounterValue'
import { FC } from 'react'
import MyButton from '../MyButton/MyButton'
import s from './style.module.css'

type ComponentPropsType = {
  isEdit: boolean
  errorMessage: string
  counter: CounterType
  resetCurrentValue: () => void
  incrementCurrentValue: () => void
}

const Counter: FC<ComponentPropsType> = ({
  errorMessage,
  counter,
  resetCurrentValue,
  incrementCurrentValue,
  isEdit,
}) => {
  return (
    <div className={s.counter}>
      <CounterValue counter={counter} errorMessage={errorMessage} isEdit={isEdit} />
      <div className={s.btnBlock}>
        <MyButton
          onClick={incrementCurrentValue}
          variant={'primary'}
          disabled={isEdit || counter.current >= counter.max}
        >
          inc
        </MyButton>
        <MyButton
          onClick={resetCurrentValue}
          variant={'primary'}
          disabled={counter.current <= counter.min}
        >
          reset
        </MyButton>
      </div>
    </div>
  )
}

export default Counter
