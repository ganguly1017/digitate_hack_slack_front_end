import React from 'react'
import TextFieldInput from './../common/TextFieldInput'

function LoginView(props) {
  return (
    <div className="container-fluid">
      <div className="container my-5">
        <div className="card animate__animated animate__rubberBand mx-auto shadow p-3 mb-5 bg-body rounded" style={{ width: "25rem" }}>
          <div className="card-body">
            <form onSubmit={props.handleSubmit}>
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
              />
              <button type="submit" className="btn btn-success" style={{ float: "right" }}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginView
