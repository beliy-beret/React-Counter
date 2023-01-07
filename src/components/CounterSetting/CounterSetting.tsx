import {ChangeEvent, FC, useState} from "react";
import s from './style.module.css';
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";

type ComponentPropsType = {
  submit: (formData: FormDataType) => void
  minValue: number
  maxValue: number
}
export type FormDataType = {
  min: number
  max: number
}

const CounterSetting: FC<ComponentPropsType> = ({submit, minValue, maxValue}) => {

  const MAX_VALUE = 'maxValue';
  const MIN_VALUE = 'minValue';
  const [formData, setFormData] = useState<FormDataType>({min: minValue, max: maxValue});
  const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value.trim());
    if (e.currentTarget.name === MIN_VALUE) {
      setFormData({...formData, min: newValue});
    }
    if (e.currentTarget.name === MAX_VALUE) {
      setFormData({...formData, max: newValue});
    }
  }
  const submitHandler = () => submit(formData);

  return (
    <div className={s.form}>
      <div className={s.field}>
        <MyInput name={MIN_VALUE} type={'number'} label={'min value'} value={formData.min} onChange={formDataHandler}/>
      </div>
      <div className={s.field}>
        <MyInput name={MAX_VALUE} type={'number'} label={'max value'} value={formData.max} onChange={formDataHandler}/>
      </div>
      <MyButton onClick={submitHandler}>set</MyButton>
    </div>
  )
}

export default CounterSetting;
