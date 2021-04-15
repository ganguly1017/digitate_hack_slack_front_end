import React, { Component } from 'react'
import propTypes from 'prop-types'
import LoginView from './LoginView'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { loginUser, clearErrors } from './../../redux/action/authActions'

class LoginContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    // auth clear error action dispatch
    this.props.clearErrors()

    // page title update
    document.title = "Hack Slack - Login"
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name] : value})
  }

  componentDidMount(){
    if (this.props.auth.isAuthenticated){
      this.props.history.push("/my")
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // dispatch login user action on redux
    this.props.loginUser(this.state, this.props.history)

  }


  render() {
    return (
      <LoginView
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.props}
      />
    )
  }
}

LoginContainer.propTypes = {
  history: propTypes.object.isRequired,
  loginUser: propTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  loginUser,
  clearErrors
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer))

