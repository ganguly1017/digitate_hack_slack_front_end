import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import propTypes from 'prop-types'

function PrivateRoute(props) {

  if (props.auth.isAuthenticated) {
    return (
      props.children
    )
  } else {
    return (
      <Redirect to="/login" />
    )
  }
}

PrivateRoute.propTypes = {
  auth: propTypes.object.isRequired,
  children: propTypes.element.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
