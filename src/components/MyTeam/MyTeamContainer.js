import React, { Component } from 'react'
import MyTeamView from './MyTeamView'
import axios from 'axios'
import { apiBaseURL } from './../../utils/constant'
import TokenExpire from './../../utils/TokenExpire'

class MyTeamContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      teams: []
    }

    // page title update
    document.title = "Hack Slack - Your Chat Team"
  }

  componentDidMount(){
    axios.get(
      `${apiBaseURL}/api/team/my`
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
      <MyTeamView 
        {...this.state}
      />
    )
  }
}

export default MyTeamContainer
