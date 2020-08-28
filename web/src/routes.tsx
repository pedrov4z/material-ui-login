import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

import { useAuthContext } from './contexts/AuthContext'

const Routes: React.FC = () => {
  const { signed } = useAuthContext()

  return(
    <BrowserRouter>
      <Route exact path="/" component={Login}>
        {signed && (
          <Redirect to="/dashboard" />
        )}
      </Route>

      <Route path="/dashboard" component={Dashboard}>
        {!signed && (
          <Redirect to="/" />
        )}
      </Route>
    </BrowserRouter>
  )
}

export default Routes
