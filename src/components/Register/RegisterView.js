import React from 'react'
import propTypes from 'prop-types'
import TextFieldInput from './../common/TextFieldInput'


function RegisterView(props) {

  const { error, isLoading } = props.auth

  if (isLoading){
    document.body.classList.add("loading")
  } else {
    document.body.classList.remove("loading")
  }

  return (
    <div className="container-fluid">
      <div className="container my-5">
        <div className="card animate__animated animate__rubberBand mx-auto shadow p-3 mb-5 bg-body rounded" style={{ width: "25rem" }}>
          <div className="card-body">
            <form onSubmit={props.handleSubmit}>
              <TextFieldInput
                type="text"
                name="username"
                id="username"
                value={props.username}
                onChange={props.handleChange}
                placeholder="sandeep_dev"
                className="form-control"
                lblText="Username"
                infoText="Your username will shown in chat list."
                error={error.username}
              />
              <TextFieldInput
                type="email"
                name="email"
                id="email"
                value={props.email}
                onChange={props.handleChange}
                placeholder="abc@abc.com"
                className="form-control"
                lblText="Email address"
                infoText="We'll never share your email with anyone else."
                error={error.email}
              />

              <TextFieldInput
                type="password"
                name="password"
                id="password"
                value={props.password}
                onChange={props.handleChange}
                placeholder="**********"
                className="form-control"
                lblText="Password"
                error={error.password}
              />
              <TextFieldInput
                type="password"
                name="password1"
                id="password1"
                value={props.password1}
                onChange={props.handleChange}
                placeholder="**********"
                className="form-control"
                lblText="Re-Type Password Again: "
                infoText="Type same password as above."
                error={error.password1}
              />

              <button type="submit" className="btn btn-success" style={{ float: "right" }}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

RegisterView.propTypes = {
  auth: propTypes.object.isRequired,
  handleSubmit: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  password1: propTypes.string.isRequired
}


export default RegisterView
