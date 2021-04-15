import React from 'react'
import classnames from 'classnames'

function TextAreaInput(props) {

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
      <textarea 
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

export default TextAreaInput
