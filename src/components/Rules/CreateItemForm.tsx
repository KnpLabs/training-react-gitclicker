import { Button, Input, InputLabel } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useEffect, useState } from 'react'
import './CreateItemForm.css'
import { RootState, useAppDispatch } from '../../store'
import { addItem, setAddItemRequestStatus } from '../../modules/rules'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RequestStatus } from '../../type'

type FormValues = {
  name: string;
  price: number;
  linesPerMillisecond: number;
}

type FormErrors = {
  name?: string;
  price?: string;
  linesPerMillisecond?: string;
}

export function CreateItemForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const requestStatus = useSelector((state: RootState) => state.rules.addItemRequestStatus)

  useEffect(() => {
    if (requestStatus === RequestStatus.Succeeded) {
      dispatch(setAddItemRequestStatus(RequestStatus.Idle))

      navigate('/rules')
    }
  }, [requestStatus, navigate, dispatch])

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    price: 0,
    linesPerMillisecond: 0,
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    setFormValues({ ...formValues, [name]: e.target.value })
  }

  const validateForm = () => {
    const errors: FormErrors = {}

    if (!formValues.name) {
      errors.name = 'Name is required'
    }

    if (!formValues.price) {
      errors.price = 'Price is required'
    }

    if (formValues.price < 0) {
      errors.price = 'Price must be a positive number'
    }

    if (!formValues.linesPerMillisecond) {
      errors.linesPerMillisecond = 'Lines per millisecond is required'
    }

    if (formValues.linesPerMillisecond <= 0) {
      errors.linesPerMillisecond = 'Lines per millisecond must be greater than 0'
    }

    setFormErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!validateForm()) {
      return
    }

    dispatch(addItem(formValues))
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className='row'>
      <InputLabel htmlFor='name'>Name *</InputLabel>
      <Input
        id='name'
        className='input'
        type='text'
        name='name'
        placeholder='Item Name'
        value={formValues.name}
        error={formErrors.name != null}
        onChange={(e) => handleChange(e, 'name')}
      />
      {
        formErrors.name && (
          <p className='error-message'>
            {formErrors.name}
          </p>
        )
      }
    </div>
    <div className='row'>
      <InputLabel htmlFor='price'>Price *</InputLabel>
      <Input
        id='price'
        className='input'
        type='number'
        name='price'
        value={formValues.price}
        error={formErrors.price != null}
        onChange={(e) => handleChange(e, 'price')}
      />
      {
        formErrors.price && (
          <p className='error-message'>
            {formErrors.price}
          </p>
        )
      }
    </div>
    <div className='row'>
      <InputLabel htmlFor='linesPerMillisecond'>Lines per millisecond *</InputLabel>
      <Input
        id='linesPerMillisecond'
        className='input'
        type='number'
        name='linesPerMillisecond'
        inputProps={{
          step: 0.1,
        }}
        value={formValues.linesPerMillisecond}
        error={formErrors.linesPerMillisecond != null}
        onChange={(e) => handleChange(e, 'linesPerMillisecond')}
      />
      {
        formErrors.linesPerMillisecond && (
          <p className='error-message'>
            {formErrors.linesPerMillisecond}
          </p>
        )
      }
    </div>
    <div className='row centered'>
      <Button
        type='submit'
        variant='contained'
        disabled={requestStatus === RequestStatus.Loading}
        startIcon={<AddIcon />}
        color='primary'
      >
        Add Item
      </Button>
    </div>
  </form>
  )
}
