import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
