import CounterSetting, { FormDataType } from './components/CounterSetting/CounterSetting'
import {
  incrementCurrent,
  resetCurrent,
  setErrorMessage,
  setMinMax,
  toggleIsEditing,
} from './store/counterSlice'
import { useAppDispatch, useAppSelector } from './store/hooks/reduxHooks'

import Counter from './components/Counter/Counter'
import { FC } from 'react'

export type CounterType = {
  min: number
  max: number
  current: number
}

const App: FC = () => {
  const dispatch = useAppDispatch()
  const { counter, isEditing, errorMessage } = useAppSelector((state) => state.counter)

  const errorMessageHandler = (message: string) => dispatch(setErrorMessage(message))

  const incrementCurrentValue = () => {
    dispatch(incrementCurrent())
  }
  const resetCurrentValue = () => dispatch(resetCurrent())

  const setCounterSetting = (formData: FormDataType) => {
    if (formData.min >= 0 && formData.max > formData.min) {
      dispatch(setMinMax(formData))
      dispatch(setErrorMessage(''))
    } else {
      errorMessageHandler('Invalid form data')
    }
  }

  const isEditingHandler = (status: boolean) => dispatch(toggleIsEditing(status))

  return (
    <div className={'App'}>
      <CounterSetting
        submit={setCounterSetting}
        maxValue={counter.max}
        minValue={counter.min}
        setErrorMessage={errorMessageHandler}
        toggleIsEdit={isEditingHandler}
        error={!!errorMessage}
      />
      <Counter
        incrementCurrentValue={incrementCurrentValue}
        resetCurrentValue={resetCurrentValue}
        counter={counter}
        errorMessage={errorMessage}
        isEdit={isEditing}
      />
    </div>
  )
}

export default App
