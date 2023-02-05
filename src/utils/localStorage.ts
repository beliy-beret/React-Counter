export const getLocalStorageData = (key: string) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}
export const setDataToLocalStorage = (key: string, data: unknown) => {
  const serializeData = JSON.stringify(data)
  localStorage.setItem(key, serializeData)
}
