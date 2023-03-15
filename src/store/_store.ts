import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { getLocalStorageData } from '../utils/localStorage'
import { setDataToLocalStorage } from './../utils/localStorage'

export const store = configureStore({
  reducer: { counter: counterReducer },
  preloadedState: {
    counter: {
      counter: getLocalStorageData('counter'),
      errorMessage: '',
      isEditing: false,
    },
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

store.subscribe(() => setDataToLocalStorage('counter', store.getState().counter.counter))
