import CounterSetting, { FormDataType } from './components/CounterSetting/CounterSetting'
import { FC, useEffect, useState } from 'react'
import {
  getLocalStorageData,
  incrementCurrent,
  resetCurrent,
  setMinMax,
} from './store/counterSlice'
import { useAppDispatch, useAppSelector } from './store/hooks/reduxHooks'

import Counter from './components/Counter/Counter'

export type CounterType = {
  min: number
  max: number
  current: number
}

const App: FC = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector((state) => state.counter)
  // Form options
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const incrementCurrentValue = () => {
    dispatch(incrementCurrent())
  }
  const resetCurrentValue = () => dispatch(resetCurrent())

  const setCounterSetting = (formData: FormDataType) => {
    if (formData.min >= 0 && formData.max > formData.min) {
      dispatch(setMinMax(formData))
      setErrorMessage('')
    } else {
      setErrorMessage('Invalid form data')
    }
  }

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter))
  }, [counter])

  return (
    <div className={'App'}>
      <CounterSetting
        submit={setCounterSetting}
        maxValue={counter.max}
        minValue={counter.min}
        setErrorMessage={setErrorMessage}
        toggleIsEdit={setIsEdit}
        error={!!errorMessage}
      />
      <Counter
        incrementCurrentValue={incrementCurrentValue}
        resetCurrentValue={resetCurrentValue}
        counter={counter}
        errorMessage={errorMessage}
        isEdit={isEdit}
      />
    </div>
  )
}

export default App
