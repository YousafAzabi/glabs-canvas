import { combineReducers } from 'redux'
import notes from './notes'
import selectedPage from './selectedPage'

export default combineReducers({
  notes,
  selectedPage
})
