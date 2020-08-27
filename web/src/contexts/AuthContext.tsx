import React, { createContext, useContext, useState } from 'react'

import api from '../services/api'

interface AuthContextData {
  signed: boolean
  token: string
  user: user | null
  emailError: string
  passwordError: string
  signIn(email: string, password: string): Promise<void>
  signOut(): void
  resetErrors(): void
}

interface user {
  id: number
  email: string
  password: string
  name: string
  role: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState<user | null>(null)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  function resetErrors() {
    setEmailError('')
    setPasswordError('')
  }

  function signOut() {
    setToken('')
    setUser(null)
  }

  async function signIn(email: string, password: string) {
    await api
      .post('users/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user)
          setToken(response.data.token)
        }
      })
      .catch((error) => {
        const { errors, message } = error.response.data

        if (error.response.status === 400) {
          errors.Email && setEmailError(errors.Email[0])
          errors.Password && setPasswordError(errors.Password[0])
        } else if (error.response.status === 404) {
          setEmailError(message)
        } else {
          setEmailError(`Algo deu errado. Cód.: ${error.response.status}`)
        }
      })
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        token,
        user,
        emailError,
        passwordError,
        signIn,
        signOut,
        resetErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  const {
    signed,
    token,
    user,
    emailError,
    passwordError,
    signIn,
    signOut,
    resetErrors,
  } = context
  return {
    signed,
    token,
    user,
    emailError,
    passwordError,
    signIn,
    signOut,
    resetErrors,
  }
}

export default AuthContext
