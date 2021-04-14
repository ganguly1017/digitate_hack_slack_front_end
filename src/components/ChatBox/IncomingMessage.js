import React from 'react'

function IncomingMessage(props) {
  const { 
    message,
    time,
    date,
    username
  } = props

  return (
    <div className="incoming_msg mb-1">
      <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="avatar" /> </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{"@" + username + " -> " +  message}</p>
          <span className="time_date">{ date + " | " + time  }</span></div>
      </div>
    </div>
  )
}

export default IncomingMessage
