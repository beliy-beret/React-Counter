import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'

import s from './style.module.css'

type InputTypes = 'text' | 'number' | 'email' | 'phone' | 'password'

interface ComponentPropsType extends InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes
  label: string
  value?: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  error?: boolean
}

const MyInput: FC<ComponentPropsType> = ({
  type,
  value,
  label,
  className = '',
  onChange,
  error = false,
  ...rest
}) => {
  const [intValue, setIntValue] = useState(value || 0)
  const inputClassName = s.input + ' ' + className + ' ' + (error ? s.error : '')
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
    setIntValue(Number(e.currentTarget.value))
  }
  return (
    <div className={s.inputComponent}>
      <label className={s.label}>{label}</label>
      <input
        className={inputClassName}
        type={type}
        value={value || intValue}
        onChange={handleChangeValue}
        {...rest}
      />
    </div>
  )
}

export default MyInput
