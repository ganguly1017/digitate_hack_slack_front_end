import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatBoxView from './ChatBoxView'
import axios from 'axios'
import { apiBaseURL } from './../../utils/constant'
import TokenExpire from './../../utils/TokenExpire'


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
      messages: [],
      user_id: new Set(),
      error: {},
      interval_id: ''
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
      // Handle token expire
      if (err.response.data.error.token_error) {
        TokenExpire()
      }
    })

    // get all chat messages after every 5 seconds
    let id = setInterval(() => {
      this.getChatMessages()
    }, 500)

    // set interval id to state
    this.setState({ interval_id: id })
  }

  componentWillUnmount(){
    clearInterval(this.state.interval_id)
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
      this.setState({ error: {} })

    }).catch(err => {
      this.setState({ error: err.response.data.error })
      // Handle token expire
      if (err.response.data.error.token_error) {
        TokenExpire()
      }
    })

  }

  handleUserClick = (e, id) => {
    e.preventDefault()

    if (this.state.oldClID === '') {
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

        if (!this.state.user_id.has(users[index])) {
          // send axios AJAX request to get team data
          axios.post(
            `${apiBaseURL}/api/user/getUser/${users[index]}`
          ).then(res => {
            this.setState(prevState => {
              const u = res.data.user

              // get old users array data
              let temp = prevState.users

              // add new user to users array
              temp.push(u)

              // update state values
              return {
                ...prevState,
                user_id: prevState.user_id.add(u._id),
                users: temp
              }
            })
          }).catch(err => {
            // Handle token expire
            if (err.response.data.error.token_error) {
              TokenExpire()
            }
          })
        }

      }
    }).catch(err => {
      // Handle token expire
      if (err.response.data.error.token_error) {
        TokenExpire()
      }
    })

    // Send AJAX Call to get all Chat Message
    axios.post(
      `${apiBaseURL}/api/chat/getMessages/${query.get("tid")}`
    ).then(res => {

      // set chat box messages
      this.setState({ messages: res.data.messages })
    }).catch(err => {
      // Handle token expire
      if (err.response.data.error.token_error) {
        TokenExpire()
      }
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
