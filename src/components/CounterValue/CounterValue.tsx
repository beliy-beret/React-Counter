import {FC} from 'react';
import s from './style.module.css';

type ComponentPropsType = {
  currentValue: number
}

const CounterValue: FC<ComponentPropsType> = ({currentValue}) => {

  const className = s.counter + " " +  (currentValue < 5 ? s.onLimit : s.noLimit);

  return(
    <h1 className={className}>{currentValue}</h1>
  )
};

export default CounterValue;
