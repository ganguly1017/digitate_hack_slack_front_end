import {
  AUTH_CLEAR_ERROR,
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_RESPONSE,
  AUTH_SET_ERROR,
  AUTH_REQUEST,
  AUTH_SET_USER
} from './types'


// login user
export const loginUser = (user) => dispatch => {

}

// register user
export const registeUser = (user) => dispatch => {
  
}

// Set User
export const setUser = (user) => {
  return {
    type: AUTH_SET_USER,
    payload: user
  }
}


// AJAX/Axios Request to server
export const authRequest = () => {
  return {
    type: AUTH_REQUEST
  }
}
// AJAX/Axios Reponse from server
export const authResponse = () => {
  return {
    type: AUTH_RESPONSE
  }
}

// Clear Error
export const clearErrors = () => {
  return {
    type: AUTH_CLEAR_ERROR
  }
}

// Set Error
export const setError = (error) => {
  return {
    type: AUTH_SET_ERROR,
    payload: error
  }
}
