import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {
  Container,
  Typography,
  Paper,
  Box,
  Avatar,
  Switch,
  Link,
} from '@material-ui/core'

import { ExitToApp } from '@material-ui/icons'

import useStyles from './styles'

const Login: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.loginPage}>
      <Paper elevation={3} className={classes.loginCard}>
        <Box className={classes.title}>
          <Avatar>
            <ExitToApp />
          </Avatar>
          <Typography className={classes.titleText} variant="h4">
            Login
          </Typography>
        </Box>

        <Box className={classes.loginForm}>
          <TextField
            label="E-mail"
            variant="outlined"
            className={classes.emailInput}
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            className={classes.passwordInput}
          />
          <Box className={classes.loginOptions}>
            <Switch />
            <Link>Esqueci minha senha</Link>
          </Box>
        </Box>

        <Button variant="contained" color="primary">
          Fazer login
        </Button>

        <Link className={classes.signUp}>Não tenho cadastro</Link>
      </Paper>
    </Container>
  )
}

export default Login
