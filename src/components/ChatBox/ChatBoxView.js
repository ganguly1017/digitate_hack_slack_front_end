import React from 'react'
import ChatList from './ChatList'
import IncomingMessage from './IncomingMessage'
import OutgoingMessage from './OutgoingMessage'
import TextAreaInput from './../common/TextAreaInput'
import propTypes from 'prop-types'


function ChatBoxView(props) {
  let team_user_list = ''

  if (props.users.length !== 0) {
    team_user_list = props.users.map((user, index) => (
      <ChatList
        username={user.username}
        date={user.createdAt.split(';')[0]}
        description={props.team.description}
        key={index}
        onClick={props.handleUserClick}
        i={index}
      />
    ))
  }

  let chatMessages = ''

  if (props.messages.length !== 0) {
    chatMessages = props.messages.map((message, index) => {
      if (message.from._id === props.auth.user.id) {
        return (
          <OutgoingMessage
            message={message.message}
            time={message.createdAt.split(';')[1]}
            date={message.createdAt.split(';')[0]}
            username={message.from.username}
            key={index}
          />
        )
      } else {
        return (
          <IncomingMessage
            message={message.message}
            time={message.createdAt.split(';')[1]}
            date={message.createdAt.split(';')[0]}
            username={message.from.username}
            key={index}
          />
        )
      }

    })
  }

  return (
    <div className="container-fluid animate__animated animate__wobble py-5">
      <div className="container">
        <h3 className=" text-center text-capitalize">{props.team.name}</h3>
        <p className=" text-center">{props.team.description}</p>
        <p className=" text-center">Team created by @{props.team.user.username}</p>
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div className="headind_srch">
                <div className="recent_heading">
                  <h4>Team Members</h4>
                </div>
              </div>
              <div className="inbox_chat">
                {team_user_list}
              </div>
            </div>
            <div className="mesgs">
              <div className="msg_history">
                {chatMessages}
              </div>
              <div className="type_msg">
                <div className="input_msg_write">
                  <TextAreaInput
                    className="form-control"
                    placeholder="Type a message"
                    name="message"
                    id="message"
                    value={props.message}
                    onChange={props.handleChange}
                    error={props.error.message}
                  />
                  <button className="btn btn-lg w-100 btn-dark" style={{ float: 'right' }} onClick={props.handleSubmit} type="button"><i className="far fa-comment-dots text-warning"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ChatBoxView.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  handleUserClick: propTypes.func.isRequired,
  users: propTypes.array.isRequired,
  messages: propTypes.array.isRequired,
  team: propTypes.object.isRequired,
  error: propTypes.object.isRequired,
  message: propTypes.string.isRequired
}


export default ChatBoxView
