import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField'

export const TextInput = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {({input, meta}) => 
        <TextField
          id={name}
          label={label ?? name}
          error={!!meta.error && meta.touched}
          helperText={meta.touched && meta.error}
          type={type}
          variant="outlined"
          {...input}
        />
      }
    </Field>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
}

TextInput.defaultProps = {
  type: 'text'
}
