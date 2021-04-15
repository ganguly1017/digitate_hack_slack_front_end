import React from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'

function TextAreaInput(props) {

  const {
    id,
    name,
    placeholder,
    value,
    onChange,
    className,
    error
  } = props

  return (
    <div className="mb-3">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classnames(className, {
          "is-invalid": error
        })}
      />
      {error && (
        <div className="invalid-feedback">
          <i className="fas fa-exclamation-circle"></i>{error}
        </div>
      )}
    </div>
  )
}

TextAreaInput.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func.isRequired,
  infoText: propTypes.string,
  className: propTypes.string,
  error: propTypes.object
}

export default TextAreaInput
