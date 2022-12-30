import {FC} from 'react';
import CounterValue from "../CounterValue/CounterValue";
import MyButton from "../MyButton/MyButton";
import s from './counter.module.css';

type ComponentPropsType = {
  counterValue: number
  resetCounter: () => void
  incrementCounter: () => void
}

const Counter: FC<ComponentPropsType> = (
  {counterValue, resetCounter, incrementCounter}
) => {

  return(
    <div className={s.counter}>
      <CounterValue currentValue={counterValue}/>
      <div className={s.btnBlock}>
        <MyButton onClick={incrementCounter} title={'+'} disabled={counterValue >= 5} />
        <MyButton onClick={resetCounter} title={'reset'} disabled={counterValue <= 0}/>
      </div>
    </div>
  )
}

export default Counter;
