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

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    if (name == "username"){
      this.setState({ [name] : value.replace(" ",  "_")})
      return;
    }

    this.setState({ [name] : value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)

  }

  render() {
    return (
      <RegisterView 
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default RegisterContainer
