import React from 'react'
import TeamCard from './../Layout/TeamList/TeamCard'

function MyTeamView(props) {
  let out = ''
  if (props.teams.length == 0) {
    out = (
      <div className="col-md-12 text-center" style={{ height: "300px" }}>
        <p className="h4">You don't created any chat teams yet.</p>
      </div>
    )
  } else {
    out = props.teams.map(team => (
      <div className="col-md-6 text-center">
        <TeamCard
          title={team.name}
          about={"Team created by @"+team.user.username}
          description={team.description}
          btn_text="Join Now"
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

export default MyTeamView
