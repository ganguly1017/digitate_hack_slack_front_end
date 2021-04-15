import React from 'react'
import propTypes from 'prop-types'

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

IncomingMessage.propTypes = {
  message: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  username: propTypes.string.isRequired
}

export default IncomingMessage
