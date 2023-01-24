import { ChangeEvent, FC, memo, useEffect, useState } from 'react';

import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import s from './style.module.css';

type ComponentPropsType = {
	setErrorMessage: (message: string) => void
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
	setErrorMessage,
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
			setErrorMessage('Invalid value. Min value must be greater than "0"');
		} else if (formData.max <= formData.min) {
			setFormFieldValid({ ...formFieldValid, maxIsValid: false });
			setErrorMessage('Invalid value. Max value must be greater than min value');
		} else {
			setErrorMessage('');
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
					error={error}
				/>
			</div>
			<div className={s.field}>
				<MyInput
					name={MAX_VALUE}
					type={'number'}
					label={'max value'}
					value={formData.max}
					onChange={formDataHandler}
					error={error}
				/>
			</div>
			<MyButton onClick={submitHandler} disabled={!formIsValid} variant={'primary'}>
				set
			</MyButton>
		</div>
	);
};

const isEqual = (prev: ComponentPropsType, next: ComponentPropsType): boolean => {
	return prev.maxValue === next.maxValue && prev.minValue === next.minValue;
};

export default memo(CounterSetting, isEqual);
