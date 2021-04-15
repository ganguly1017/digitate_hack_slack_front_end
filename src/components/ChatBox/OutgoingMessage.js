import React from 'react'
import propTypes from 'prop-types'

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


OutgoingMessage.propTypes = {
  message: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  username: propTypes.string.isRequired
}

export default OutgoingMessage
