import React, { Component } from 'react'
import LoginView from './LoginView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginUser, clearErrors } from './../../redux/action/authActions'

class LoginContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    // auth clear error action dispatch
    this.props.clearErrors()
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name] : value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // dispatch login user action on redux
    this.props.loginUser(this.state, this.props.history)
    
    
    console.log(this.state)

  }


  render() {
    return (
      <LoginView
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  loginUser,
  clearErrors
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer))

