import React, { Component } from 'react'
import ChatBoxView from './ChatBoxView'

class ChatBoxContainer extends Component {

  constructor(props){
    super(props)

    this.state = {

    }

  }


  render() {
    return (
      <ChatBoxView 
        {...this.state}
        {...this.props}
      />
    )
  }
}

export default ChatBoxContainer
