import {
  TEAM_CLEAR_ERROR,
  TEAM_RESPONSE,
  TEAM_SET_ERROR,
  TEAM_REQUEST
} from './types'

import { apiBaseURL } from './../../utils/constant'
import axios from 'axios'
import Swal from 'sweetalert2'
import TokenExpire from './../../utils/TokenExpire'


// create new team
export const createNewTeam = (team, history) => dispatch => {
  // set isLoading to true
  dispatch(teamRequest());

  // clear team errors
  dispatch(clearErrors());

  // axios API call
  axios.post(
    `${apiBaseURL}/api/team/new`,
    team
  ).then(res => {
    // set isLoading to false
    dispatch(teamResponse())

    Swal.fire(
      'New Team Register',
      res.data.message,
      'success'
    )

    // redirect user to my team page
    history.push("/my")
  }).catch(err => {
    // set isLoading to false
    dispatch(teamResponse())

    // Handle token expire
    if (err.response.data.error.token_error){
      TokenExpire()
    }

    // set errors
    dispatch(setError(err.response.data.error))
  })
}


// AJAX/Axios Request to server
export const teamRequest = () => {
  return {
    type: TEAM_REQUEST
  }
}
// AJAX/Axios Reponse from server
export const teamResponse = () => {
  return {
    type: TEAM_RESPONSE
  }
}

// Clear Error
export const clearErrors = () => {
  return {
    type: TEAM_CLEAR_ERROR
  }
}

// Set Error
export const setError = (error) => {
  return {
    type: TEAM_SET_ERROR,
    payload: error
  }
}
