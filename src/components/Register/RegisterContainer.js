import React, { Component } from 'react'
import propTypes from 'prop-types'
import RegisterView from './RegisterView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { registeUser, clearErrors } from './../../redux/action/authActions'

class RegisterContainer extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      password1: ''
    }

    // auth clear error action dispatch
    this.props.clearErrors()

    // page title update
    document.title = "Hack Slack - Register"
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name === "username"){
      this.setState({ [name] : value.replace(" ",  "_")})
      return;
    }

    this.setState({ [name] : value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.registeUser(this.state, this.props.history)
  }

  render() {
    return (
      <RegisterView 
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.props}
      />
    )
  }
}

RegisterContainer.propTypes = {
  registeUser: propTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  registeUser,
  clearErrors
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterContainer))
