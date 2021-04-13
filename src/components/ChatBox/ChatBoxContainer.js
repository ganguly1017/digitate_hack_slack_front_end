import React, { Component } from 'react'
import ChatBoxView from './ChatBoxView'

class ChatBoxContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      message: ''
    }

  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name] : value})
  }

  componentDidMount(){
    const query = new URLSearchParams(window.location.search)

    console.log(query.get("tid"))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    console.log("Message sent.")
  }


  render() {
    return (
      <ChatBoxView 
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default ChatBoxContainer
