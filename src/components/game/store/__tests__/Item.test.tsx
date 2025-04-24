import { render, screen, fireEvent } from '@testing-library/react'
import { Item } from '../Item'
import { items } from '@/utils/__mocks__/items.mock'

describe('Item', () => {
  it('Renders a buyable item', () => {
    const onBuy = vi.fn()

    render(
      <Item
        item={items[0]}
        lines={150}
        onBuy={onBuy}
      />,
    )

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/1 lines per second/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).not.toBeDisabled()

    fireEvent.click(screen.getByRole('button'))

    expect(onBuy).toHaveBeenCalledWith(items[0])
  })

  it('Renders a non buyable item', () => {
    const onBuy = vi.fn()

    render(
      <Item
        item={items[0]}
        lines={0}
        onBuy={onBuy}
      />,
    )

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/1 lines per second/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()

    fireEvent.click(screen.getByRole('button'))

    expect(onBuy).not.toHaveBeenCalledWith(items[0])
  })
})
