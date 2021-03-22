import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  FETCHED_ITEMS,
  addItem,
  editItem,
  fetchItems,
  deleteItem,
} from './rules'

const items = [
  {
    'id': 1,
    'name': 'Bash',
    'price': 10,
    'multiplier': 0.1
  },
  {
    'id': 2,
    'name': 'React',
    'price': 100,
    'multiplier': 1.2
  }
]

const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/shop/items`, 
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(items))
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}/api/shop/items`, 
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(items[0]))
    }
  ),
  rest.put(
    `${process.env.REACT_APP_API_URL}/api/shop/items/1`, 
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(req.body))
    }
  ),
  rest.delete(
    `${process.env.REACT_APP_API_URL}/api/shop/items/1`, 
    (req, res, ctx) => {
      return res(ctx.status(204))
    }
  )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Side effects', () => {
  it('fetchItems', async () => {
    const dispatch = jest.fn()
    const thunk = fetchItems()

    await thunk(dispatch)

    expect(dispatch).toHaveBeenCalledWith({
      type: FETCHED_ITEMS,
      items
    })
  })

  it('addItem', async () => {
    const dispatch = jest.fn()
    const thunk = addItem(items[0])

    await thunk(dispatch)

    expect(dispatch).toHaveBeenCalledWith({
      type: ADD_ITEM,
      item: items[0]
    })
  })

  it('editItem', async () => {
    const dispatch = jest.fn()
    const item = { 
      id: 1,
      'name': 'zsh',
      'price': 100,
      'multiplier': 12
    }
    const thunk = editItem(1, item)

    await thunk(dispatch)

    expect(dispatch).toHaveBeenCalledWith({
      type: EDIT_ITEM,
      item
    })
  })

  it('deleteItem', async () => {
    const dispatch = jest.fn()
    const item = { id: 1 }

    const thunk = deleteItem(item)

    await thunk(dispatch)

    expect(dispatch).toHaveBeenCalledWith({
      type: DELETE_ITEM,
      id: 1
    })
  })
})
