import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import setAuthToken from './utils/setAuthToken'
import { setUser } from './redux/action/authActions'

import NavbarContainer from './components/Layout/Navbar/NavbarContainer'
import Footer from './components/Layout/Footer'
import TeamListContainer from './components/Layout/TeamList/TeamListContainer'
import LoginContainer from './components/Login/LoginContainer'
import RegisterContainer from './components/Register/RegisterContainer'
import NewTeamContainer from './components/NewTeam/NewTeamContainer'
import MyTeamContainer from './components/MyTeam/MyTeamContainer'



// set data from localStorage
if (localStorage.jwtToken && localStorage.user ){
  // set auth token to axios HTTP header
  setAuthToken(localStorage.jwtToken)

  // disptach set user action to auth reducer
  store.dispatch(setUser(JSON.parse(localStorage.user)))
}


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavbarContainer />
        <Route exact path="/">
          <TeamListContainer />
        </Route>
        <Route exact path="/login">
          <LoginContainer />
        </Route>
        <Route exact path="/register">
          <RegisterContainer />
        </Route>
        <Route exact path="/createTeam">
          <NewTeamContainer />
        </Route>
        <Route exact path="/my">
          <MyTeamContainer />
        </Route>
        <Footer />
      </Router>
    </Provider>
  )
}
