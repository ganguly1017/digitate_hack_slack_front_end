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
  }

  componentDidMount(){
    axios.get(
      `${apiBaseURL}/api/team/all`
    ).then(res => {
      this.setState({ teams: res.data.teams })
    }).catch(err => {
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
