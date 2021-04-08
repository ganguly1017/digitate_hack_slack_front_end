import React from 'react'
import TeamCard from './TeamCard'

function TeamListView() {
  return (
    <div className="container-fluid py-5 bg-warning" style={{ height: "400px" }}>
      <div className="container" >
        <div className="row" >
          <div className="col-md-6 text-center">
            <TeamCard 
              title="Android E Commerce App"
              about="Team created by @sandeep"
              btn_text="Join Now"
            />
          </div>
          <div className="col-md-6 text-center">
            <p className="my-5">Join this team to chat with project software developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamListView
