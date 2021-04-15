import React from 'react'
import TextFieldInput from './../common/TextFieldInput'
import propTypes from 'prop-types'

function LoginView(props) {

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
            <form onSubmit={props.handleSubmit} autoComplete="off" noValidate>
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
              <button type="submit" className="btn btn-success" style={{ float: "right" }}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

LoginView.propTypes = {
  auth: propTypes.object.isRequired,
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  password: propTypes.string.isRequired
}

export default LoginView
