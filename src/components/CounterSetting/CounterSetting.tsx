import {ChangeEvent, FC, useState} from "react";
import s from'./style.module.css';
import MyButton from "../MyButton/MyButton";

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

  const [formData, setFormData] = useState<FormDataType>({min: minValue, max: maxValue});
  const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, min: Number(e.currentTarget.value)});
  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, max: Number(e.currentTarget.value)});
  const submitHandler = () => submit(formData);
  return(
    <div className={s.container}>
      <div>
        <label>
          min value
          <input
            type="number"
            value={formData.min}
            onChange={minValueHandler}
          />
        </label>
      </div>
      <div>
        <label>
          max value
          <input
            type="number"
            value={formData.max}
            onChange={maxValueHandler}
          />
        </label>
      </div>
      <div>
        <MyButton onClick={submitHandler}>set</MyButton>
      </div>
    </div>
  )
}

export default CounterSetting;
