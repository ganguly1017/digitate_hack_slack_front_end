import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


function NavbarView(props) {

  const { isAuthenticated } = props.auth

  let links = ''

  if (isAuthenticated) {
    links = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/createTeam">
            <i className="fas fa-plus-circle text-warning pe-2"></i>Team
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/my">
            My Team
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" aria-current="page" onClick={props.logoutUser}>
            Logout
            </a>
        </li>
      </React.Fragment>
    )
  } else {
    links = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/register">Register</Link>
        </li>
      </React.Fragment>
    )
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="assets/img/slack_logo.png" alt="company logo" className="rounded-circle" width="40" height="40" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links}
          </ul>
        </div>
      </div>
    </nav>
  )
}

NavbarView.propTypes = {
  auth: propTypes.object.isRequired,
  logoutUser: propTypes.func.isRequired
}


export default NavbarView