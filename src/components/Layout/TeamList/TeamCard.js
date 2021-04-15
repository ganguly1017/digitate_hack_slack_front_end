import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function TeamCard(props) {
  const {
    title,
    about,
    description,
    btn_text,
    tid
  } = props
  
  return (
    <div className="card shadow animate__animated animate__pulse p-3 mb-5 bg-body rounded" >
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <img src="assets/img/team_logo.png" alt="team logo" className="rounded-circle img-fluid" />
          </div>
          <div className="col-md-8">
            { title && <h5 className="card-title text-capitalize">{props.title}</h5> }
            { about && (<p className="card-text">{props.about}</p>) }
            { description && (<p className="card-text">{description}</p>) }
            { btn_text && (<Link to={`/chat_box?tid=${tid}`} className="btn btn-danger">{props.btn_text}</Link>)}
          </div>
        </div>

      </div>
    </div>
  )
}

TeamCard.propTypes = {
  title: propTypes.string,
  about: propTypes.string,
  description: propTypes.string,
  btn_text: propTypes.string,
  tid: propTypes.string
}



export default TeamCard
