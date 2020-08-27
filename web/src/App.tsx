import React from 'react'

import { ThemeProvider, CssBaseline } from '@material-ui/core'

import Routes from './routes'

import { AuthProvider } from './contexts/AuthContext'

import theme from './assets/styles/theme'

import './global.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
