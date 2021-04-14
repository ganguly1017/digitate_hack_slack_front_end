import React from 'react'
import ChatList from './ChatList'
import IncomingMessage from './IncomingMessage'
import OutgoingMessage from './OutgoingMessage'
import TextFieldInput from './../common/TextFieldInput'


function ChatBoxView(props) {
  const team_user_list = props.users.map((user, index) => (
    <ChatList
      username={user.username}
      date={user.createdAt.split(';')[0]}
      description={props.team.description}
      key={index}
      onClick={props.handleUserClick}
      i={index}
    />
  ))
  
  let chatMessages = ''

  if (props.messages.length != 0 ){
    chatMessages = props.messages.map(( message, index ) => {
      return (
        <IncomingMessage 
          message={message.message}
          time={message.createdAt.split(';')[1]}
          date={message.createdAt.split(';')[0]}
          username={message.from.username}
          key={index}
        />
      )
    })
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <h3 className=" text-center text-capitalize">{props.team.name}</h3>
        <p className=" text-center">{props.team.description}</p>
        <p className=" text-center">Team created by @{props.team.user.username}</p>
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div className="headind_srch">
                <div className="recent_heading">
                  <h4>Recent</h4>
                </div>
                <div className="srch_bar">
                  <div className="stylish-input-group">
                    <input type="text" className="search-bar" placeholder="Search" />
                    <span className="input-group-addon">
                      <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                    </span> </div>
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
                  <TextFieldInput
                    type="text"
                    className="write_msg"
                    placeholder="Type a message"
                    name="message"
                    id="message"
                    value={props.message}
                    onChange={props.handleChange}
                  />
                  <button className="msg_send_btn" onClick={props.handleSubmit} type="button"><i className="far fa-comment-dots text-warning"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ChatBoxView
