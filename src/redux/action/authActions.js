import {
  AUTH_CLEAR_ERROR,
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_RESPONSE,
  AUTH_SET_ERROR,
  AUTH_REQUEST,
  AUTH_SET_USER
} from './types'

import { apiBaseURL } from './../../utils/constant'
import axios from 'axios'
import Swal from 'sweetalert2' 


// login user
export const loginUser = (user, history) => dispatch => {
  // set isLoading to true
  dispatch(authRequest());

  // clear auth errors
  dispatch(clearErrors());

  // axios API call
  axios.post(
    `${apiBaseURL}/api/user/login`,
    user
  ).then(res => {
    // set isLoading to false
    dispatch(authResponse())

  }).catch(err => {
    // set isLoading to false
    dispatch(authResponse())

    // set errors
    dispatch(setError(err.response.data.error))
  })
}

// register user
export const registeUser = (user, history) => dispatch => {
  // set isLoading to true
  dispatch(authRequest());

  // clear auth errors
  dispatch(clearErrors());

  // axios API call
  axios.post(
    `${apiBaseURL}/api/user/register`,
    user
  ).then(res => {
    // set isLoading to false
    dispatch(authResponse())

    Swal.fire(
      'User Registration',
      res.data.message,
      'success'
    )

    // redirect user to login page
    history.push("/login")

  }).catch(err => {
    // set isLoading to false
    dispatch(authResponse())

    // set errors
    dispatch(setError(err.response.data.error))
  })
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
