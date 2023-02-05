import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { FormDataType } from './../components/CounterSetting/CounterSetting'

export type CounterType = {
  min: number
  max: number
  current: number
}

type InitialState = CounterType

const initialState: InitialState = {
  min: 0,
  max: 1,
  current: 0,
}

export const getLocalStorageData = createAsyncThunk('counter/getLocalStorageData', async () => {
  const data = localStorage.getItem('counter')
  return data ? JSON.parse(data) : initialState
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCurrent: (state) => {
      if (state.current < state.max) {
        state.current += 1
      }
    },
    resetCurrent: (state) => {
      state.current = state.min
    },
    setMinMax: (state, action: PayloadAction<FormDataType>) => {
      state.min = action.payload.min
      state.max = action.payload.max
      if (action.payload.min > state.current) {
        state.current = action.payload.min
      }
      if (action.payload.max < state.current) {
        state.current = action.payload.max
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLocalStorageData.fulfilled, (state, action: PayloadAction<CounterType>) => {
      state.current = action.payload.current
      state.min = action.payload.min
      state.max = action.payload.max
    })
  },
})

export const { incrementCurrent, resetCurrent, setMinMax } = counterSlice.actions

export default counterSlice.reducer
