import authReducer from './authReducer'
import teamReducer from './teamReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  auth: authReducer,
  team: teamReducer
})