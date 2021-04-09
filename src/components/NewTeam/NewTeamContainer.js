import React, { Component } from 'react'
import NewTeamView from './NewTeamView'


class NewTeamContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: '',
      desc: ''
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name] : value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)

  }

  render() {
    return (
      <NewTeamView 
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


export default NewTeamContainer
