import { ChangeEvent, FC, useEffect, useState } from 'react';
import s from './style.module.css';
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';

type ComponentPropsType = {
	setError: (message: string) => void
	toggleIsEdit: (value: boolean) => void
	submit: (formData: FormDataType) => void
	minValue: number
	maxValue: number
	error: boolean
}
type FormValidType = Record<'minIsValid' | 'maxIsValid', boolean>
export type FormDataType = {
	min: number
	max: number
}

const CounterSetting: FC<ComponentPropsType> = ({
	submit,
	minValue,
	maxValue,
	toggleIsEdit,
	setError,
	error
}) => {
	// Form validation
	const [formFieldValid, setFormFieldValid] = useState<FormValidType>({
		minIsValid: true,
		maxIsValid: true
	});
	const formIsValid = formFieldValid.minIsValid && formFieldValid.maxIsValid;

	// Form data
	const MAX_VALUE = 'maxValue';
	const MIN_VALUE = 'minValue';
	const [formData, setFormData] = useState<FormDataType>({
		min: minValue,
		max: maxValue
	});
	const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
		toggleIsEdit(true);
		const newValue = Number(e.currentTarget.value.trim());
		if (e.currentTarget.name === MIN_VALUE) {
			setFormData({ ...formData, min: newValue });
		}
		if (e.currentTarget.name === MAX_VALUE) {
			setFormData({ ...formData, max: newValue });
		}
	};

	// Form submit
	const submitHandler = () => {
		if (formIsValid) {
			toggleIsEdit(false);
			submit(formData);
		}
	};

	//Check formField validation
	useEffect(() => {
		if (formData.min < 0) {
			setFormFieldValid({ ...formFieldValid, minIsValid: false });
			setError('Invalid value. Min value must be greater than "0"');
		} else if (formData.max <= formData.min) {
			setFormFieldValid({ ...formFieldValid, maxIsValid: false });
			setError('Invalid value. Max value must be greater than min value');
		} else {
			setError('');
			setFormFieldValid({
				...formFieldValid,
				maxIsValid: true,
				minIsValid: true
			});
		}
	}, [formData]);

	return (
		<div className={s.form}>
			<div className={s.field}>
				<MyInput
					name={MIN_VALUE}
					type={'number'}
					label={'min value'}
					value={formData.min}
					onChange={formDataHandler}
					className={error ? s.error : ''}
				/>
			</div>
			<div className={s.field}>
				<MyInput
					name={MAX_VALUE}
					type={'number'}
					label={'max value'}
					value={formData.max}
					onChange={formDataHandler}
					className={error ? s.error : ''}
				/>
			</div>
			<MyButton onClick={submitHandler} disabled={!formIsValid}>
				set
			</MyButton>
		</div>
	);
};

export default CounterSetting;
