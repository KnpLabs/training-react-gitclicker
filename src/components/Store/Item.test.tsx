import BashIcon from 'devicon/icons/bash/bash-original.svg'
import { render, screen, fireEvent } from '@testing-library/react'
import { Item } from './Item'

describe('Item', () => {
  it('Renders a buyable item', () => {
    const item = {
      id: 1,
      name: 'Bash',
      price: 10,
      linesPerMillisecond: 0.1,
      icon: BashIcon
    }

    const onBuy = jest.fn()

    render(
      <Item
        item={item}
        lines={150}
        onBuy={onBuy}
      />
    )

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/1 lines per second/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).not.toBeDisabled()

    fireEvent.click(screen.getByRole('button'))

    expect(onBuy).toHaveBeenCalledWith(item)
  })

  it('Renders a non buyable item', () => {
    const item = {
      id: 1,
      name: 'Bash',
      price: 10,
      linesPerMillisecond: 0.1,
      icon: BashIcon
    }

    const onBuy = jest.fn()

    render(
      <Item
        item={item}
        lines={0}
        onBuy={onBuy}
      />
    )

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/1 lines per second/i)).toBeInTheDocument()
    expect(screen.getByRole(/button/i)).toBeDisabled()

    fireEvent.click(screen.getByRole('button'))

    expect(onBuy).not.toHaveBeenCalledWith(item)
  })
})
