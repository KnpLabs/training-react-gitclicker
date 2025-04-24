import { InputLabel, Input, Button } from '@mui/material'
import { useState } from 'react'

type FormValues = {
  firstName: string
  lastName: string
}

export function MyForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
  })

  const handleChange: React.ComponentProps<'input'>['onChange'] = (e) => {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    // ...
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <InputLabel htmlFor="firstName">First Name</InputLabel>
      <Input
        id="firstName"
        type="text"
        name="firstName"
        value={formValues.firstName}
        onChange={handleChange}
      />
      <InputLabel htmlFor="lastName">Last Name</InputLabel>
      <Input
        id="lastName"
        type="text"
        name="lastName"
        value={formValues.lastName}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Add Person
      </Button>
    </form>
  )
}
