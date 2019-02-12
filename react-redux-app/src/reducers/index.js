import { combineReducers } from 'redux'
import notes from './notes'
import selectedPage from './selectedPage'
import selectedMode from './selectedMode'

export default combineReducers({
  notes,
  selectedPage,
  selectedMode
})
