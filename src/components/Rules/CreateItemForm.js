import React from 'react'
import './Form.css'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { Form, Field } from 'react-final-form'
import SaveIcon from '@material-ui/icons/Save'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { addItem } from 'modules/rules'
import validateItem from 'validators/item'

export const CreateItemForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async data => {
    dispatch(addItem({
      ...data,
      price: parseInt(data.price),
      multiplier: parseInt(data.multiplier)
    }))

    history.push('/rules')
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateItem}
      subscription={{ touched: true }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Typography variant="h5">Add an item</Typography>

          <div className="row">
            <Field name="name">
              {({input, meta}) =>
                <TextField
                  id="name"
                  label="Name"
                  error={!!meta.error && meta.touched}
                  helperText={meta.touched && meta.error}
                  variant="outlined"
                  {...input}
                />
              }
            </Field>
          </div>

          <div className="row">
            <Field name="price">
              {({input, meta}) =>
                <TextField
                  id="price"
                  label="Price"
                  error={!!meta.error && meta.touched}
                  helperText={meta.touched && meta.error}
                  type="number"
                  variant="outlined"
                  {...input}
                />
              }
            </Field>

            <Field name="multiplier">
              {({input, meta}) =>
                <TextField
                  id="multiplier"
                  label="Multiplier"
                  error={!!meta.error && meta.touched}
                  helperText={meta.touched && meta.error}
                  type="number"
                  variant="outlined"
                  {...input}
                />
              }
            </Field>
          </div>

          <div className="row">
            <Button
              onClick={() => history.push('/rules')}
              startIcon={<CloseIcon />}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              startIcon={<SaveIcon />}
              color="primary"
              variant="contained"
            >
              Add
            </Button>
          </div>
        </form>
      )}
    </Form>
  )
}
