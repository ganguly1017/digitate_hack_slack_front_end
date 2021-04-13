import React from 'react'

function OutgoingMessage(props) {
  const {
    message,
    date,
    time
  } = props


  return (
    <div className="outgoing_msg mb-1">
      <div className="sent_msg">
        <p>{message}</p>
        <span className="time_date">{ time + " | " + date  }</span> </div>
    </div>
  )
}

export default OutgoingMessage
