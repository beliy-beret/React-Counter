import {FC} from 'react';
import s from './style.module.css';
import {CounterType} from "../../App";

type ComponentPropsType = {
  counter: CounterType
}

const CounterValue: FC<ComponentPropsType> = ({counter}) => {

  const className = s.value + " " + (counter.current < counter.max ? s.onLimit : s.noLimit);

  return (
    <div className={s.container}>
      <h1 className={className}>{counter.current}</h1>
    </div>
  )
};

export default CounterValue;
