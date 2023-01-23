import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import s from './style.module.css';

type InputTypes = 'text' | 'number' | 'email' | 'phone' | 'password'

interface ComponentPropsType extends InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  label: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  error?: boolean
}

const MyInput: FC<ComponentPropsType> = (
  {
    type,
    value,
    label,
    className = '',
    onChange,
    error = false,
    ...rest
  }
) => {
  const inputClassName = s.input + ' ' + className + ' ' + (error ? s.error : '');
  return (
    <div className={s.inputComponent}>
      <span className={s.label}>
        {label}
      </span>
      <input
        className={inputClassName}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default MyInput;
