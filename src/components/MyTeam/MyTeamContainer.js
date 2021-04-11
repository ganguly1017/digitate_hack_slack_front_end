import React, { Component } from 'react'
import MyTeamView from './MyTeamView'
import axios from 'axios'
import { apiBaseURL } from './../../utils/constant'

class MyTeamContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      teams: []
    }
  }

  componentDidMount(){
    axios.get(
      `${apiBaseURL}/api/team/my`
    ).then(res => {
      this.setState({ teams: res.data.teams })
    }).catch(err => {

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
