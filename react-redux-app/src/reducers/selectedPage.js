import { PageNumbers } from '../actions'

const selectPage = (state = PageNumbers.ONE, action) => {
  switch (action.type) {
    case 'CHOOSE_PAGE':
      return action.number
    default:
      return state
  }
}

export default selectPage
