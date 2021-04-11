import axios from 'axios'

function setAuthToken(token){
  if (token){
    // set HTTP Header AUTH Token
    axios.defaults.headers.common["x-access-token"] = token
  } else {
    // delete token from axios HTTP Header
    delete axios.defaults.headers.common["x-access-token"]
  }
}

export default setAuthToken