import React from 'react'

function OutgoingMessage(props) {
  const {
    message,
    date,
    time,
    username
  } = props


  return (
    <div className="outgoing_msg mb-1">
      <div className="sent_msg">
        <p>{ "@" + username + " -> " + message}</p>
        <span className="time_date">{ date + " | " + time  }</span> </div>
    </div>
  )
}

export default OutgoingMessage
