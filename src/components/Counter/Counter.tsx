import {FC} from 'react';
import CounterValue from "../CounterValue/CounterValue";
import MyButton from "../MyButton/MyButton";
import s from './style.module.css';
import {CounterType} from "../../App";

type ComponentPropsType = {
  isEdit: boolean
  error: string
  counter: CounterType
  resetCurrentValue: () => void
  incrementCurrentValue: () => void
}

const Counter: FC<ComponentPropsType> = (
  {
    error,
    counter,
    resetCurrentValue,
    incrementCurrentValue,
    isEdit
  }
) => {

  return(
    <div className={s.counter}>
      <CounterValue counter={counter} error={error} isEdit={isEdit}/>
      <div className={s.btnBlock}>
        <MyButton onClick={incrementCurrentValue} disabled={isEdit || counter.current >= counter.max}>inc</MyButton>
        <MyButton onClick={resetCurrentValue} disabled={counter.current <= counter.min}>reset</MyButton>
      </div>
    </div>
  )
}

export default Counter;
