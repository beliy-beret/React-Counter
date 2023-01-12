import {FC, ReactNode} from 'react';
import s from './style.module.css';

type ComponentPropsType = {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
}

const MyButton: FC<ComponentPropsType> = (
  {children, onClick, disabled}
) => {
  return (
    <button className={s.btn} onClick={onClick} disabled={disabled}>{children}</button>
  );
};

export default MyButton;
