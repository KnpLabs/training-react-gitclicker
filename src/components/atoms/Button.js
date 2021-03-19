import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const Button = ({
  kind,
  disabled,
  onClick,
  children
}) => {
  return (
    <button
      className={classnames({
        'btn': true,
        'btn--primary': kind === 'primary',
        'btn--secondary': kind === 'secondary',
        'btn--tertiary': kind === 'tertiary',
        'btn--danger': kind === 'danger',
        'btn--ghost': kind === 'ghost',
        'btn--disabled': disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'ghost']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  kind: 'primary',
  disabled: false,
  onClick: () => {}
}
