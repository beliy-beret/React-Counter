import { CounterType } from '../App'

export const getLocalStorageData = (key: string) => {
  const counter: CounterType = {
    min: 0,
    max: 1,
    current: 0,
  }
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : counter
}
export const setDataToLocalStorage = (key: string, data: unknown) => {
  const serializeData = JSON.stringify(data)
  localStorage.setItem(key, serializeData)
}
