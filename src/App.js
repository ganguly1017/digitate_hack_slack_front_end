import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import NavbarContainer from './components/Layout/Navbar/NavbarContainer'
import Footer from './components/Layout/Footer'

export default function App() {
  return (
    <Router>
      <NavbarContainer />
      <Footer />
    </Router>
  )
}
