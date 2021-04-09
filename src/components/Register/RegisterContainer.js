import React, { Component } from 'react'
import RegisterView from './RegisterView'

class RegisterContainer extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      password1: ''
    }

  }


  render() {
    return (
      <RegisterView 

      />
    )
  }
}


export default RegisterContainer
