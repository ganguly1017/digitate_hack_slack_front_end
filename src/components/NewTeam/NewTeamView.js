import React from 'react'
import propTypes from 'prop-types'
import TextFieldInput from './../common/TextFieldInput'

function NewTeamView(props) {
  const { error, isLoading } = props.team

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
                name="name"
                id="name"
                value={props.name}
                onChange={props.handleChange}
                placeholder="Android Dev Team"
                className="form-control"
                lblText="Team Name"
                infoText="This will be you chat group / team"
                error={error.name}
              />

              <TextFieldInput
                type="text"
                name="description"
                id="description"
                value={props.description}
                onChange={props.handleChange}
                placeholder="android team for video streaming project"
                className="form-control"
                lblText="Team Description"
                error={error.description}
              />
              <button type="submit" className="btn btn-primary" style={{ float: "right" }}>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

NewTeamView.propTypes = {
  team: propTypes.object.isRequired,
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired
}

export default NewTeamView