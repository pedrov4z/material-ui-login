import React, { useState } from 'react'
import {
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormGroup,
  FormControlLabel,
  Switch,
  Link,
  Button,
  Modal,
} from '@material-ui/core'

import { ExitToApp, VisibilityOff, Visibility } from '@material-ui/icons'

import { LoginCardProps } from '../../pages/Login'

import PasswordReset from '../PasswordReset'

import useStyles from './styles'

const LoginCard: React.FC<LoginCardProps> = (props) => {
  const { setLoginMode } = props

  const [modalOpen, setModalOpen] = useState(false)

  const [passwordVisible, setPasswordVisible] = useState(false)
  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }

  const classes = useStyles()

  return (
    <Paper className={classes.loginCard}>
      <Box className={classes.title}>
        <Avatar>
          <ExitToApp />
        </Avatar>
        <Typography className={classes.titleText} variant="h4">
          Fazer Login
        </Typography>
      </Box>

      <Box className={classes.loginForm}>
        <TextField label="E-mail" type="email" variant="outlined" />
        <FormControl className={classes.passwordInput} variant="outlined">
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
          />
        </FormControl>
        <Box className={classes.psswdOptions}>
          <FormGroup className={classes.switchContainer}>
            <FormControlLabel
              control={<Switch color="secondary" />}
              label="Lembrar-me"
            />
          </FormGroup>
          <Link
            onClick={() => setModalOpen(true)}
            style={{ cursor: 'pointer' }}
          >
            Esqueci minha senha
          </Link>
        </Box>
      </Box>

      <Button variant="contained" color="primary">
        Entrar
      </Button>

      <Link
        onClick={() => setLoginMode('register')}
        className={classes.loginOptions}
      >
        Não tenho cadastro
      </Link>

      <Modal
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        open={modalOpen}
      >
        <PasswordReset setModalOpen={setModalOpen} />
      </Modal>
    </Paper>
  )
}

export default LoginCard
