export const addDate = () => {
  console.log('action')
  let date = new Date()
  return {
    type: 'ADD_DATE',
    date: date.toString(),
  }
}

export const clearDate = () => {
  console.log('action')
  return {
    type: 'CLEAR_DATE',
  }
}
