import React from 'react'

import { TextField } from '@material-ui/core'

import { useRegistrationContext } from '../../../contexts/RegistrationContext'

import useStyles from '../styles'

const StepTwo: React.FC = (props) => {
  const classes = useStyles()

  const {
    email,
    setEmail,
    emailConfirmation,
    setEmailConfirmation,
  } = useRegistrationContext()

  return (
    <>
      <TextField
        className={classes.inputMT}
        label="E-mail"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        className={classes.inputMT}
        label="Confirmar e-mail"
        type="email"
        variant="outlined"
        value={emailConfirmation}
        onChange={(e) => setEmailConfirmation(e.target.value)}
      />
    </>
  )
}

export default StepTwo
