import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { FormDataType } from './../components/CounterSetting/CounterSetting'

export type CounterType = {
  min: number
  max: number
  current: number
}

export type InitialState = {
  counter: CounterType
  errorMessage: string
  isEditing: boolean
}

const initialState = (): InitialState => ({
  counter: { min: 0, max: 1, current: 0 },
  errorMessage: '',
  isEditing: false,
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCurrent: (state) => {
      if (state.counter.current < state.counter.max) {
        state.counter.current += 1
      }
    },
    resetCurrent: (state) => {
      state.counter.current = state.counter.min
    },
    setMinMax: (state, action: PayloadAction<FormDataType>) => {
      state.counter.min = action.payload.min
      state.counter.max = action.payload.max
      if (action.payload.min > state.counter.current) {
        state.counter.current = action.payload.min
      }
      if (action.payload.max < state.counter.current) {
        state.counter.current = action.payload.max
      }
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
    toggleIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload
    },
  },
})

export const { incrementCurrent, resetCurrent, setMinMax, setErrorMessage, toggleIsEditing } =
  counterSlice.actions

export default counterSlice.reducer
