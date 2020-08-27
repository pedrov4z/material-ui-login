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
  FormHelperText,
} from '@material-ui/core'

import { ExitToApp, VisibilityOff, Visibility } from '@material-ui/icons'

import { LoginCardProps } from '../../pages/Login'

import PasswordReset from '../PasswordReset'

import { useAuthContext } from '../../contexts/AuthContext'

import useStyles from './styles'

const LoginCard: React.FC<LoginCardProps> = (props) => {
  const { setLoginMode } = props

  const [modalOpen, setModalOpen] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const [passwordVisible, setPasswordVisible] = useState(false)
  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }

  const { signIn, resetErrors, emailError, passwordError } = useAuthContext()

  const classes = useStyles()

  const handleLoginSubmit = () => {
    resetErrors()
    signIn(email, password)
  }

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
        <TextField
          label="E-mail"
          type="email"
          error={emailError !== ''}
          helperText={emailError}
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormControl className={classes.passwordInput} variant="outlined">
          <InputLabel>Senha</InputLabel>
          <OutlinedInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={passwordVisible ? 'text' : 'password'}
            error={passwordError !== ''}
            labelWidth={45}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {passwordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText>{passwordError}</FormHelperText>
        </FormControl>

        <Box className={classes.psswdOptions}>
          <FormGroup className={classes.switchContainer}>
            <FormControlLabel
              control={
                <Switch
                  value={rememberMe}
                  onClick={() => setRememberMe(!rememberMe)}
                  color="secondary"
                />
              }
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

      <Button onClick={handleLoginSubmit} variant="contained" color="primary">
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
