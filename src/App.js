import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import NavbarContainer from './components/Layout/Navbar/NavbarContainer'

export default function App() {
  return (
    <Router>
      <NavbarContainer />
    </Router>
  )
}
