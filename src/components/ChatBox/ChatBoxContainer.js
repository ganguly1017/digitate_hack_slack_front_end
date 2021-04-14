import React, { Component } from 'react'
import { connect } from 'react-redux'
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
      oldClID: '',
      messages: []
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

    // get all chat messages after every 5 seconds
    setInterval(() => {
      this.getChatMessages()
    }, 500)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const query = new URLSearchParams(window.location.search)

    const chatMessage = {
      message: this.state.message,
      team: query.get("tid")
    };

    // Send AJAX Call to create new Chat Message
    axios.post(
      `${apiBaseURL}/api/chat/new`,
      chatMessage
    ).then(res => {

      // empty chat box message
      this.setState({ message: '' })

    }).catch(err => {

    })

  }

  handleUserClick = (e, id) => {
    e.preventDefault()

    if (this.state.oldClID == '') {
      document.getElementById(id).classList.add("active_chat")
      this.setState({ oldClID: id })
    } else {
      document.getElementById(this.state.oldClID).classList.remove("active_chat")
      this.setState({ oldClID: id })
      document.getElementById(id).classList.add("active_chat")
    }
  }


  getChatMessages = () => {

    const query = new URLSearchParams(window.location.search)

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

          // reset state data
          this.setState({ users: [] })

          let temp = this.state.users

          temp.push(res.data.user)

          this.setState({ users: temp })
        }).catch(err => {

        })
      }
    }).catch(err => {

    })

    // Send AJAX Call to get all Chat Message
    axios.post(
      `${apiBaseURL}/api/chat/getMessages/${query.get("tid")}`
    ).then(res => {

      // empty chat box message
      this.setState({ messages: res.data.messages })
    }).catch(err => {

    })
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

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxContainer)
