import '@/styles/rules/form.css'
import { useState } from 'react'
import { useAppDispatch } from '@/store'
import { addItem } from '@/modules/rules'
import { InputLabel, Input, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

type FormValues = {
  name: string
  price: number
  linesPerMillisecond: number
}

export function CreateItemForm() {
  const dispatch = useAppDispatch()

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    price: 0,
    linesPerMillisecond: 0,
  })

  const handleChange: React.ComponentProps<'input'>['onChange'] = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit: React.ComponentProps<'form'>['onSubmit'] = (e) => {
    e.preventDefault()
    dispatch(addItem(formValues))
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
          onChange={handleChange}
        />
      </div>
      <div>
        <InputLabel htmlFor="price">Price *</InputLabel>
        <Input
          id="price"
          className="input"
          type="number"
          name="price"
          value={formValues.price}
          onChange={handleChange}
        />
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
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        startIcon={<AddIcon />}
        color="primary"
      >
        Add Item
      </Button>
    </form>
  )
}
