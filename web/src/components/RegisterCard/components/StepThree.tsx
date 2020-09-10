import React, { useState } from 'react'

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  FormHelperText,
} from '@material-ui/core'

import { VisibilityOff, Visibility } from '@material-ui/icons'

import { useRegistrationContext } from '../../../contexts/RegistrationContext'

import {
  validatePassword,
  validatePasswordConfirmation,
} from '../../../helpers/validators'

import useStyles from '../styles'

const StepThree: React.FC = (props) => {
  const classes = useStyles()

  const [passwordVisible, setPasswordVisible] = useState(false)
  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }

  const {
    password,
    setPassword,
    passwordError,
    setPasswordError,
    passwordConfirmation,
    setPasswordConfirmation,
    passwordConfirmationError,
    setPasswordConfirmationError,
  } = useRegistrationContext()

  return (
    <>
      <FormControl className={classes.inputMT} variant="outlined">
        <InputLabel>Senha</InputLabel>
        <OutlinedInput
          type={passwordVisible ? 'text' : 'password'}
          labelWidth={45}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {passwordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          value={password}
          error={passwordError !== ''}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={(e) => setPasswordError(validatePassword(e.target.value))}
          autoFocus
        />
        <FormHelperText>{passwordError}</FormHelperText>
      </FormControl>
      <TextField
        className={classes.inputMT}
        label="Confirmar senha"
        error={passwordConfirmationError !== ''}
        type="password"
        variant="outlined"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        onBlur={(e) =>
          setPasswordConfirmationError(
            validatePasswordConfirmation(e.target.value, password)
          )
        }
        helperText={passwordConfirmationError}
      />
    </>
  )
}

export default StepThree
