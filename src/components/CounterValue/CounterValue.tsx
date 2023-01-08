import {FC} from 'react';
import s from './style.module.css';
import {CounterType} from "../../App";

type ComponentPropsType = {
  counter: CounterType
  error: string
  isEdit: boolean
}

const CounterValue: FC<ComponentPropsType> = ({counter, error, isEdit}) => {

  const className = s.container + " " +
    (counter.current < counter.max ? s.onLimit : s.noLimit) + ' ' +
    (error ? s.noLimit : s.onLimit) + " " +
    (isEdit && '')


  const getValue = () => {
    if(error){
      return <span className={s.message}>{error}</span>
    } else if(isEdit){
      return <span className={s.message}>Enter value and press 'set'</span>
    } else {
      return <span className={s.value}>{counter.current}</span>
    }
  }

  return (
    <div className={className}>
      {getValue()}
    </div>
  )
};

export default CounterValue;
