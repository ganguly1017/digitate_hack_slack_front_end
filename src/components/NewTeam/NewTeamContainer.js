import React, { Component } from 'react'
import propTypes from 'prop-types'
import NewTeamView from './NewTeamView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createNewTeam, clearErrors } from './../../redux/action/teamActions'

class NewTeamContainer extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: '',
      description: ''
    }

    // dispatch clear errors action of team
    this.props.clearErrors()

    // page title update
    document.title = "Hack Slack - Create Chat Team"
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name] : value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // dispatch create new team action
    this.props.createNewTeam(this.state, this.props.history)
  }

  render() {
    return (
      <NewTeamView 
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.props}
      />
    )
  }
}

NewTeamContainer.propTypes = {
  createNewTeam: propTypes.func.isRequired,
  clearErrors: propTypes.func.isRequired
}


const mapStateToProps = state => ({
  auth: state.auth,
  team: state.team
})

const mapDispatchToProps = {
  createNewTeam,
  clearErrors
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewTeamContainer))
