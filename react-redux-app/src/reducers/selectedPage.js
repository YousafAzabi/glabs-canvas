import { PageNumbers } from '../actions'

const selectedPage = (state = PageNumbers.ONE, action) => {
  switch (action.type) {
    case 'SELECT_PAGE':
      return action.page
    default:
      return state
  }
}

export default selectedPage
