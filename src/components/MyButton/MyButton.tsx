import {FC} from 'react';
import s from './style.module.css';

type ComponentPropsType = {
  title: string
  onClick: () => void
  disabled?: boolean
}

const MyButton: FC<ComponentPropsType> = (
  {title, onClick, disabled}
) => {
  return(
    <button className={s.btn} onClick={onClick} disabled={disabled}>{title}</button>
  )
}

export default MyButton;
