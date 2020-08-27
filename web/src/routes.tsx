import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

import { useAuthContext } from './contexts/AuthContext'

const Routes: React.FC = () => {
  const { signed } = useAuthContext()

  return(
    <BrowserRouter>
      <Route exact path="/" component={signed ? Dashboard : Login} />
    </BrowserRouter>
  )
}

export default Routes
