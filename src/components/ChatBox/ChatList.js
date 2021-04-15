import React from 'react'
import propTypes from 'prop-types'

function ChatList(props) {

  const {
    username,
    date,
    description,
    onClick,
    i
  } = props

  return (
    <div id={"cl_"+i} className="chat_list" onClick={(e) => { onClick(e, ("cl_"+i)) }}>
      <div className="chat_people">
        <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="avatar" /> </div>
        <div className="chat_ib">
          <h5>{username} <span className="chat_date">{date}</span></h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

ChatList.propTypes = {
  username: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  i: propTypes.number.isRequired
}

export default ChatList
