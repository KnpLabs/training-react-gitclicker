import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/styles/theme'
import { Provider } from 'react-redux'
import store from './store'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
