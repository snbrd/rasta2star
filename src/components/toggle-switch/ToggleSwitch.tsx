import React from 'react'
import PropTypes from 'prop-types'
import { useRouteMatch, Link, useHistory } from 'react-router-dom'
import './ToggleSwitch.css'

/*
Toggle Switch Component
Note: id, checked and onChange are required for ToggleSwitch component to function. The props name, small, disabled
and optionLabels are optional.
Usage: <ToggleSwitch id="id" checked={value} onChange={checked => setValue(checked)}} />
*/

type Props = {
  id: string
  checked: boolean
  onChange: (p: boolean) => void
  name?: string
  optionLabels?: any[]
  small?: boolean
  disabled?: boolean
}

const ToggleSwitch = ({
  id,
  name,
  checked,
  onChange,
  optionLabels = ['Active', 'Inactive'],
  small,
  disabled,
}: Props) => {
  function handleKeyPress(e) {
  //   if (e.keyCode !== 32) return
  //   alert()
  //   e.preventDefault()
    onChange(e.target.checked)
    if (checked === true) {
      history.push(`${url}/history`)
    } else {
      history.push(`${url}`)
    }
    // onChange(!checked)
    // checked ? history.push(`${url}/history`) : history.push(`${url}`)
  }
  const { url, isExact } = useRouteMatch()
  const history = useHistory()
  return (
    <div className={`toggle-switch w-24 ${small ? ' small-switch' : ''}`}>
      <input
        type="checkbox"
        name={name}
        className="toggle-switch-checkbox"
        id={id}
        checked={checked}
        onChange={(e) => {
          handleKeyPress(e)
        }}
        disabled={disabled}
      />
      {id ? (
        <label
          className="toggle-switch-label"
          tabIndex={disabled ? -1 : 1}
          // onKeyDown={(e) => handleKeyPress(e)}
          htmlFor={id}
        >
          <span
            className={disabled ? 'toggle-switch-inner toggle-switch-disabled' : 'toggle-switch-inner'}
            data-yes={optionLabels[0]}
            data-no={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={disabled ? 'toggle-switch-switch toggle-switch-disabled' : 'toggle-switch-switch'}
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  )
}

export default ToggleSwitch
