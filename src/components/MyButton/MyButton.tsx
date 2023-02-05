import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import s from './style.module.css';

interface ComponentPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

const MyButton: FC<ComponentPropsType> = ({ children, variant = 'default', ...rest }) => {
  const btnClass = `${s.btn} ${s[variant]}`;
  return (
    <button data-testid={'myButton'} className={btnClass} {...rest}>
      {children}
    </button>
  );
};

export default MyButton;
