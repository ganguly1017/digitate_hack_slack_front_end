import {
  TEAM_CLEAR_ERROR,
  TEAM_RESPONSE,
  TEAM_SET_ERROR,
  TEAM_REQUEST
} from './../action/types'

const initialState = {
  isLoading: false,
  error: {

  }
}

export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case TEAM_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case TEAM_RESPONSE:
      return {
        ...state,
        isLoading: false
      }
    case TEAM_SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case TEAM_CLEAR_ERROR:
      return {
        ...state,
        error: {}
      }
    default:
      return state
  }
}