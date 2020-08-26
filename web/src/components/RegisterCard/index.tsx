import React, { useState } from 'react'
import {
  Paper,
  Box,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core'

import { ArrowBack } from '@material-ui/icons'

import { LoginCardProps } from '../../pages/Login'

import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'

import useStyles from './styles'

const RegisterCard: React.FC<LoginCardProps> = (props) => {
  const { setLoginMode } = props

  const [step, setStep] = useState(1)

  const classes = useStyles()

  return (
    <Paper className={classes.registerCard}>
      <Box className={classes.title}>
        <IconButton
          onClick={step === 1 ? () => setLoginMode('login') : () => setStep(step - 1)}
        >
          <ArrowBack />
        </IconButton>
        <Typography className={classes.titleText} variant="h5">
          Fazer Cadastro
        </Typography>
      </Box>

      <Box className={classes.registerForm}>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
      </Box>

      {step !== 3 ? (
        <Button
          onClick={() => setStep(step + 1)}
          className={classes.inputMT}
          variant="contained"
          color="primary"
        >
          Próximo
        </Button>
      ) : (
        <Button className={classes.inputMT} variant="contained" color="primary">
          Enviar
        </Button>
      )}
    </Paper>
  )
}

export default RegisterCard
