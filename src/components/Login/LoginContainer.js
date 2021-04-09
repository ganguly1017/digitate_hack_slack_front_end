import React, { Component } from 'react'
import LoginView from './LoginView'

class LoginContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {

  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)

  }


  render() {
    return (
      <LoginView
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default LoginContainer

