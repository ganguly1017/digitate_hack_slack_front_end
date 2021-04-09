import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import NavbarContainer from './components/Layout/Navbar/NavbarContainer'
import Footer from './components/Layout/Footer'
import TeamListContainer from './components/Layout/TeamList/TeamListContainer'
import LoginContainer from './components/Login/LoginContainer'
import RegisterContainer from './components/Register/RegisterContainer'

export default function App() {
  return (
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
      <Footer />
    </Router>
  )
}
