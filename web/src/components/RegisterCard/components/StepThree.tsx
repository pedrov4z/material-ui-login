import React, { useState } from 'react'

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
} from '@material-ui/core'

import { VisibilityOff, Visibility } from '@material-ui/icons'

import { useRegistrationContext } from '../../../contexts/RegistrationContext'

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
    passwordConfirmation,
    setPasswordConfirmation,
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <TextField
        className={classes.inputMT}
        label="Confirmar senha"
        type="password"
        variant="outlined"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
    </>
  )
}

export default StepThree
