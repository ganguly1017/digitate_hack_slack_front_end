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
      },
      users: [],
      oldClID: ''
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


    // send axios AJAX request to get team user name
    axios.post(
      `${apiBaseURL}/api/chat/getTeamUser/`,
      {
        team: query.get("tid")
      }
    ).then(res => {
      const users = res.data.users

      let index = 0;

      for (index = 0; index < users.length; index++) {
        // send axios AJAX request to get team data
        axios.post(
          `${apiBaseURL}/api/user/getUser/${users[index]}`
        ).then(res => {
          
          let temp = this.state.users
          
          temp.push(res.data.user)
          
          this.setState({ users: temp })
        }).catch(err => {

        })
      }
    }).catch(err => {

    })


  }

  handleSubmit = (e) => {
    e.preventDefault()
    
  }

  handleUserClick = (e, id) => {
    e.preventDefault()
    
    if (this.state.oldClID == ''){
      document.getElementById(id).classList.add("active_chat")
      this.setState({ oldClID: id })
    } else {
      document.getElementById(this.state.oldClID).classList.remove("active_chat")
      this.setState({ oldClID: id })
      document.getElementById(id).classList.add("active_chat")
    }
  }


  render() {

    return (
      <ChatBoxView
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleUserClick={this.handleUserClick}
      />
    )
  }
}

export default ChatBoxContainer
