import React from 'react'
import classnames from 'classnames'

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
      {infoText && (<div id={id} className="form-text"><i class="fas fa-info-circle"></i>{infoText}</div>)}
      {error && (
        <div className="invalid-feedback">
          <i class="fas fa-exclamation-circle"></i>{error}
        </div>
      )}
    </div>
  )
}

export default TextFieldInput
