import React, { Component } from 'react'
import propTypes from 'prop-types'
import NavbarView from './NavbarView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logoutUser } from './../../../redux/action/authActions'


class NavbarContainer extends Component {
  constructor(props){
    super(props)
    
    this.state = {

    }
  }

  logoutUser = (e) => {
    e.preventDefault()

    // dispatch logout user action
    this.props.logoutUser(this.props.history)
  }

  render() {
    return (
      <NavbarView 
        {...this.props}
        logoutUser={this.logoutUser}
      />
    )
  }
}

NavbarContainer.propTypes = {
  logoutUser: propTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  logoutUser
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavbarContainer))
