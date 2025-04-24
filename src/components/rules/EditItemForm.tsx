import '@/styles/rules/form.css'
import { useEffect, useState } from 'react'
import { RootState, useAppDispatch } from '@/store'
import { InputLabel, Input, Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { RequestStatus } from '@/types'
import { setEditItemRequestStatus, editItem } from '@/modules/rules'

type FormValues = {
  id: number
  name: string
  price: number
  linesPerMillisecond: number
}

type FormErrors = {
  name?: string
  price?: string
  linesPerMillisecond?: string
}

export function EditItemForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id: itemId } = useParams()

  const item = useSelector((state: RootState) => {
    if (itemId == null) {
      return null
    }

    return state.rules.items.find(item => item.id === Number.parseInt(itemId))
  })

  const requestStatus = useSelector((state: RootState) => state.rules.editItemRequestStatus)

  useEffect(() => {
    if (requestStatus === RequestStatus.Succeeded) {
      dispatch(setEditItemRequestStatus(RequestStatus.Idle))

      navigate('/rules')
    }
  }, [requestStatus, navigate, dispatch])

  const [formValues, setFormValues] = useState<FormValues>({
    id: item?.id ?? 0,
    name: item?.name ?? '',
    price: item?.price ?? 0,
    linesPerMillisecond: item?.linesPerMillisecond ?? 0,
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const handleChange: React.ComponentProps<'input'>['onChange'] = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
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

  const handleSubmit: React.ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    dispatch(editItem(formValues))
  }

  if (item == null) {
    return <p className="error-message">Item with id: {itemId} not found</p>
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <InputLabel htmlFor="name">Name *</InputLabel>
        <Input
          id="name"
          className="input"
          type="text"
          name="name"
          placeholder="Item Name"
          value={formValues.name}
          error={formErrors.name != null}
          onChange={handleChange}
        />
        {formErrors.name && (
          <p className="error-message">
            {formErrors.name}
          </p>
        )}
      </div>
      <div>
        <InputLabel htmlFor="price">Price *</InputLabel>
        <Input
          id="price"
          className="input"
          type="number"
          name="price"
          value={formValues.price}
          error={formErrors.price != null}
          onChange={handleChange}
        />
        {formErrors.price && (
          <p className="error-message">
            {formErrors.price}
          </p>
        )}
      </div>
      <div>
        <InputLabel htmlFor="linesPerMillisecond">Lines per millisecond *</InputLabel>
        <Input
          id="linesPerMillisecond"
          className="input"
          type="number"
          name="linesPerMillisecond"
          inputProps={{
            step: 0.1,
          }}
          value={formValues.linesPerMillisecond}
          error={formErrors.linesPerMillisecond != null}
          onChange={handleChange}
        />
        {formErrors.linesPerMillisecond && (
          <p className="error-message">
            {formErrors.linesPerMillisecond}
          </p>
        )}
      </div>
      <Button
        type="submit"
        variant="contained"
        disabled={requestStatus === RequestStatus.Loading}
        startIcon={<SaveIcon />}
        color="primary"
      >
        Save
      </Button>
    </form>
  )
}
