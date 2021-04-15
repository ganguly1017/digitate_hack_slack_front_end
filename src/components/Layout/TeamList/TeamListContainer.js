import React, { Component } from 'react'
import TeamListView from './TeamListView'
import axios from 'axios'
import { apiBaseURL } from './../../../utils/constant'
import TokenExpire from './../../../utils/TokenExpire'

class TeamListContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      teams: []
    }

    // page title update
    document.title = "Hack Slack - All Chat Teams"
  }

  componentDidMount(){

    // start loader before api call
    document.body.classList.add("loading")

    axios.get(
      `${apiBaseURL}/api/team/all`
    ).then(res => {
      this.setState({ teams: res.data.teams })

      // remove loader after api call
      document.body.classList.remove("loading")
    }).catch(err => {

      // remove loader after api call
      document.body.classList.remove("loading")
      
      // Handle token expire
      if (err.response.data.error.token_error){
        TokenExpire()
      }
    })
  }

  
  render() {
    return (
      <TeamListView 
        {...this.state}
      />
    )
  }
}

export default TeamListContainer
