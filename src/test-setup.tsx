import '@testing-library/jest-dom/vitest'
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, RootState } from '@/store'

const customRender = (
  ui: ReactElement,
  {
    preloadedState,
    ...options
  }: RenderOptions & { preloadedState?: Partial<RootState> } = {},
) => {
  const store = createStore(preloadedState)

  return render(ui, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    ),
    ...options,
  })
}

export * from '@testing-library/react'
export { customRender as render }
