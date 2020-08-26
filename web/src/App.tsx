import React from 'react';

import { ThemeProvider, CssBaseline } from '@material-ui/core';

import Login from './pages/Login';

import theme from './assets/styles/theme';

import './global.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  );
}

export default App;
