import { ModeStatus } from '../actions'

const selectedMode = (state = ModeStatus.EDIT, action) => {
  switch (action.type) {
    case 'SELECT_MODE':
      return action.mode
    default:
      return state
  }
}

export default selectedMode
