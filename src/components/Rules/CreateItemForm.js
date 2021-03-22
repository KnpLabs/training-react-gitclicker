import React from 'react'
import './Form.css'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { Form } from 'react-final-form'
import SaveIcon from '@material-ui/icons/Save'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { TextInput } from 'components/atoms/fields/TextInput'
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
            <TextInput name="name" label="Name" />
          </div>

          <div className="row">
            <TextInput name="price" label="Price" type="number" />
            <TextInput name="multiplier" label="Multiplier" type="number" />
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
