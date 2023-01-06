import {FC} from 'react';
import CounterValue from "../CounterValue/CounterValue";
import MyButton from "../MyButton/MyButton";
import s from './style.module.css';
import {CounterType} from "../../App";

type ComponentPropsType = {
  counter: CounterType
  resetCurrentValue: () => void
  incrementCurrentValue: () => void
}

const Counter: FC<ComponentPropsType> = (
  {counter, resetCurrentValue, incrementCurrentValue}
) => {

  return(
    <div className={s.counter}>
      <CounterValue counter={counter}/>
      <div className={s.btnBlock}>
        <MyButton onClick={incrementCurrentValue} disabled={counter.current >= counter.max}>inc</MyButton>
        <MyButton onClick={resetCurrentValue} disabled={counter.current <= counter.min}>reset</MyButton>
      </div>
    </div>
  )
}

export default Counter;
