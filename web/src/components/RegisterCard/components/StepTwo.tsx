import React from 'react'

import { TextField } from '@material-ui/core'

import { useRegistrationContext } from '../../../contexts/RegistrationContext'

import { validateEmail, validateEmailConfirmation } from '../../../helpers/validators'

import useStyles from '../styles'

const StepTwo: React.FC = (props) => {
  const classes = useStyles()

  const {
    email,
    setEmail,
    emailError,
    setEmailError,
    emailConfirmation,
    setEmailConfirmation,
    emailConfirmationError,
    setEmailConfirmationError,
  } = useRegistrationContext()

  return (
    <>
      <TextField
        className={classes.inputMT}
        label="E-mail"
        error={emailError !== ''}
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={(e) => setEmailError(validateEmail(e.target.value))}
        helperText={emailError}
      />

      <TextField
        className={classes.inputMT}
        label="Confirmar e-mail"
        error={emailConfirmationError !== ''}
        type="email"
        variant="outlined"
        value={emailConfirmation}
        onChange={(e) => setEmailConfirmation(e.target.value)}
        onBlur={(e) => setEmailConfirmationError(validateEmailConfirmation(e.target.value, email))}
        helperText={emailConfirmationError}
      />
    </>
  )
}

export default StepTwo
