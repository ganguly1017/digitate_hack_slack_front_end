import React, { Component } from 'react'
import LoginView from './LoginView'

class LoginContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }


  render() {
    return (
      <LoginView 

      />
    )
  }
}

export default LoginContainer

