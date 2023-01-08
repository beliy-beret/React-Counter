import {ChangeEvent, FC} from 'react';
import s from './style.module.css';

type InputTypes = 'text' | 'number' | 'email' | 'phone' | 'password'

type ComponentPropsType = {
  name: string
  type: InputTypes
  label: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MyInput: FC<ComponentPropsType> = (
  {
    type,
    name,
    value,
    label,
    onChange}
) => {

  return (
    <div className={s.inputComponent}>
      <span className={s.label}>
        {label}
      </span>
      <input
        className={s.input}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MyInput;
