import React from 'react'

function IncomingMessage(props) {
  const { 
    message,
    time,
    date
  } = props

  return (
    <div className="incoming_msg mb-1">
      <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="avatar" /> </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{message}</p>
          <span className="time_date">{ time + " | " + date  }</span></div>
      </div>
    </div>
  )
}

export default IncomingMessage
