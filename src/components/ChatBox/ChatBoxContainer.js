import React, { Component } from 'react'
import ChatBoxView from './ChatBoxView'
import axios from 'axios'
import { apiBaseURL } from './../../utils/constant'

class ChatBoxContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: '',
      team: {
        _id: '',
        name: '',
        description: '',
        user: {
          _id: '',
          username: ''
        }
      }
    }

  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })
  }

  componentDidMount() {
    const query = new URLSearchParams(window.location.search)

    // send axios AJAX request to get team data
    axios.post(
      `${apiBaseURL}/api/team/getTeam/${query.get("tid")}`
    ).then(res => {
      this.setState({ team: res.data.team })
    }).catch(err => {

    })


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
