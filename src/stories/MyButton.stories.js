import React from 'react'

import { Button } from 'components/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  kind: 'primary',
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  kind: 'secondary',
  children: 'Button',
}

export const Danger = Template.bind({})
Danger.args = {
  kind: 'danger',
  children: 'Button',
}

export const Ghost = Template.bind({})
Ghost.args = {
  kind: 'ghost',
  children: 'Button',
}

