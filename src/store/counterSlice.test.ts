import reducer, { InitialState, incrementCurrent, setMinMax, toggleIsEditing } from './counterSlice'

import { FormDataType } from '../components/CounterSetting/CounterSetting'

test('Should increment current value', () => {
  const state: InitialState = {
    counter: { min: 0, max: 2, current: 0 },
    errorMessage: '',
    isEditing: false,
  }
  const newState = reducer(state, incrementCurrent())
  expect(newState.counter.current).toEqual(1)
})

test('Should leave current value without change', () => {
  const state: InitialState = {
    counter: { min: 0, max: 2, current: 2 },
    errorMessage: '',
    isEditing: false,
  }
  const newState = reducer(state, incrementCurrent())
  expect(newState.counter.current).toEqual(state.counter.current)
})

test('Should toggle isEditing mode', () => {
  const state: InitialState = {
    counter: { min: 0, max: 2, current: 0 },
    errorMessage: '',
    isEditing: false,
  }
  const newState = reducer(state, toggleIsEditing(true))
  expect(newState.isEditing).toBeTruthy()
})

test('Should change max value', () => {
  const state: InitialState = {
    counter: { min: 0, max: 6, current: 6 },
    errorMessage: '',
    isEditing: false,
  }
  const formData: FormDataType = { max: 5, min: 0 }
  const newState = reducer(state, setMinMax(formData))
  expect(newState.counter.max).toEqual(5)
  expect(newState.counter.current).toEqual(5)
})

test('Should change min and current values', () => {
  const state: InitialState = {
    counter: { min: 0, max: 6, current: 0 },
    errorMessage: '',
    isEditing: false,
  }
  const formData: FormDataType = { max: 6, min: 3 }
  const newState = reducer(state, setMinMax(formData))
  expect(newState.counter.min).toEqual(3)
  expect(newState.counter.current).toEqual(newState.counter.min)
})
