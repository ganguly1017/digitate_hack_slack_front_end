import store from './../redux/store'
import { clearUser } from './../redux/action/authActions'
import setAuthToken from './setAuthToken'

function TokenExpire() {
  // logout user
  store.dispatch(clearUser())

  // clear localstorage
  localStorage.clear()

  // remove HTTP Header auth token from axios
  setAuthToken(false)

  // redirect to login page
  window.location.href = "/login"
}

export default TokenExpire
