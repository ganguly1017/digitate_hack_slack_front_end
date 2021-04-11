import {
  AUTH_CLEAR_ERROR,
  AUTH_RESPONSE,
  AUTH_SET_ERROR,
  AUTH_REQUEST,
  AUTH_SET_USER,
  AUTH_LOGOUT
} from './../action/types'

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  error: {

  },
  user: {}
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case AUTH_RESPONSE:
      return {
        ...state,
        isLoading: false
      }
    case AUTH_SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case AUTH_CLEAR_ERROR:
      return {
        ...state,
        error: {}
      }
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false
      }
    default:
      return state
  }
}