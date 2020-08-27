import React, { useState } from 'react'
import { Paper, Box, Typography, IconButton, Button } from '@material-ui/core'

import { ArrowBack } from '@material-ui/icons'

import { LoginCardProps } from '../../pages/Login'

import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'

import { useRegistrationContext } from '../../contexts/RegistrationContext'

import useStyles from './styles'

const RegisterCard: React.FC<LoginCardProps> = (props) => {
  const { setLoginMode } = props

  const [step, setStep] = useState(1)

  const {
    legalPerson,
    name,
    nameError,
    cpf,
    cpfError,
    cnpj,
    cnpjError,
    email,
    emailError,
    emailConfirmation,
    emailConfirmationError,
    password,
    passwordError,
    passwordConfirmation,
    passwordConfirmationError,

    sendNewUser,
  } = useRegistrationContext()

  const classes = useStyles()

  const defaultAlert = () => {
    alert('Preencha todos os campos corretamente')
  }

  const handleSubmitButton = () => {
    if (step === 1) {
      if (legalPerson === 'physical') {
        if (name && nameError === '' && cpf && cpfError === '') setStep(2)
        else defaultAlert()
      } else if (legalPerson === 'juridical') {
        if (name && nameError === '' && cnpj && cnpjError === '') setStep(2)
        else defaultAlert()
      }
    } else if (step === 2) {
      if (
        email &&
        emailError === '' &&
        emailConfirmation &&
        emailConfirmationError === ''
      )
        setStep(3)
      else defaultAlert()
    } else if (step === 3) {
      if (
        password &&
        passwordError === '' &&
        passwordConfirmation &&
        passwordConfirmationError === ''
      ) {
        sendNewUser()
      } else defaultAlert()
    }
  }

  return (
    <Paper className={classes.registerCard}>
      <Box className={classes.titleBar}>
        <Box className={classes.title}>
          <IconButton
            onClick={
              step === 1 ? () => setLoginMode('login') : () => setStep(step - 1)
            }
          >
            <ArrowBack />
          </IconButton>

          <Typography className={classes.titleText} variant="h5">
            Fazer Cadastro
          </Typography>
        </Box>

        <Box className={classes.stepSelector}>
          <Box className={step === 1 ? classes.stepSelectorItemSelected : classes.stepSelectorItem}>1</Box>-
          <Box className={step === 2 ? classes.stepSelectorItemSelected : classes.stepSelectorItem}>2</Box>-
          <Box className={step === 3 ? classes.stepSelectorItemSelected : classes.stepSelectorItem}>3</Box>
        </Box>
      </Box>
      <Box className={classes.registerForm}>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
      </Box>

      <Button
        onClick={handleSubmitButton}
        className={classes.inputMT}
        variant="contained"
        color="primary"
      >
        {step === 3 ? 'Enviar' : 'Próximo'}
      </Button>
    </Paper>
  )
}

export default RegisterCard
