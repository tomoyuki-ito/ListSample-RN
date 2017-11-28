export const date = (state = {items: []}, action) => {
  console.log('reducer')
  switch (action.type) {
    case 'ADD_DATE':
      let items = Object.assign([], state.items)
      items.push(action.date)
      return {...state, items: items}
    case 'CLEAR_DATE':
      return {...state, items: []}
    default:
      return state
  }
}
