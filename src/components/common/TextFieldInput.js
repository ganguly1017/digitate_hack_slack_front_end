import React from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'

function TextFieldInput(props) {

  const {
    type,
    id,
    name,
    placeholder,
    value,
    onChange,
    lblText,
    infoText,
    className,
    error
  } = props

  return (
    <div className="mb-3">
      { lblText && (<label htmlFor={id} className="form-label">{lblText}</label>) }
      <input 
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classnames(className, {
          "is-invalid": error
        })}
      />
      {infoText && (<div id={id} className="form-text"><i className="fas fa-info-circle"></i>{infoText}</div>)}
      {error && (
        <div className="invalid-feedback">
          <i className="fas fa-exclamation-circle"></i>{error}
        </div>
      )}
    </div>
  )
}

TextFieldInput.propTypes = {
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func.isRequired,
  lblText: propTypes.string,
  infoText: propTypes.string,
  className: propTypes.string,
  error: propTypes.object
}


export default TextFieldInput
