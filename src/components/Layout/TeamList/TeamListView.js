import React from 'react'
import propTypes from 'prop-types'
import TeamCard from './TeamCard'

function TeamListView(props) {

  const { teams } = props

  let out = ''

  if (teams.length === 0) {
    out = (
      <React.Fragment>
        <div className="col-md-6 text-center">
          <TeamCard
            title="Android E Commerce App"
            about="Team created by @sandeep"
            btn_text="Join Now"
          />
        </div>
        <div className="col-md-6 text-center">
          <p className="my-5 animate__animated animate__pulse">Join this team to chat with project software developer</p>
        </div>
      </React.Fragment>
    )
  } else {
    out = teams.map((team, index) => (
      <div className="col-md-6 text-center" key={index}>
        <TeamCard
          title={team.name}
          about={"Team created by @" + team.user.username}
          description={team.description}
          btn_text="Join Now"
          tid={team._id}
        />
      </div>
    ))
  }

  return (
    <div className="container-fluid py-5 bg-secondary" >
      <div className="container" >
        <div className="row" >
          {out}
        </div>
      </div>
    </div>
  )
}

TeamListView.propTypes = {
  teams: propTypes.array.isRequired
}

export default TeamListView
