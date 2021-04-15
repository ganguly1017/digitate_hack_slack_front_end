import React from 'react'
import TeamCard from './../Layout/TeamList/TeamCard'
import propTypes from 'prop-types'

function MyTeamView(props) {
  let out = ''
  if (props.teams.length === 0) {
    out = (
      <div className="col-md-12 text-center" style={{ height: "300px" }}>
        <p className="h4">You don't created any chat teams yet.</p>
      </div>
    )
  } else {
    out = props.teams.map((team, index) => (
      <div className="col-md-6 text-center" key={index}>
        <TeamCard
          title={team.name}
          about={"Team created by @"+team.user.username}
          description={team.description}
          btn_text="Join Now"
          tid={team._id}
        />
      </div>
    ))
  }

  return (
    <div className="container-fluid py-5" >
      <div className="container" >
        <div className="row" >
          {out}
        </div>
      </div>
    </div>
  )
}

MyTeamView.propTypes = {
  teams: propTypes.array.isRequired
}

export default MyTeamView
