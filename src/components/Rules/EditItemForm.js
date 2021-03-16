import React from 'react'
import './Form.css'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Field } from 'react-final-form'
import SaveIcon from '@material-ui/icons/Save'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { editItem } from 'modules/rules'
import validateItem from 'validators/item'

export const EditItemForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const item = useSelector(state => state.rules.items.find(item => item.id === parseInt(id)))

  const onSubmit = async data => {
    dispatch(editItem(item.id, {
      ...data,
      price: parseInt(data.price),
      multiplier: parseInt(data.multiplier)
    }))

    history.push('/rules')
  }
  
  if (!item) return null

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateItem}
      initialValues={item}
      subscription={{ touched: true }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Typography variant="h5">Edit {item.name}</Typography>

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
              Edit
            </Button>
          </div>
        </form>
      )}
    </Form>
  )
}
