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
  FormGroup,
  FormControlLabel,
} from '@material-ui/core'

import { ExitToApp } from '@material-ui/icons'

import useStyles from './styles'

const Login: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.loginPage}>
      <Paper className={classes.loginCard}>
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
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            className={classes.passwordInput}
          />
          <Link className={classes.psswdResetLink}>Esqueci minha senha</Link>
          <FormGroup className={classes.loginOptions}>
            <FormControlLabel control={<Switch color="primary" />} label="Lembrar-me" />
          </FormGroup>
        </Box>

        <Button variant="contained" color="primary">
          Fazer login
        </Button>

        <Link className={classes.loginOptions}>Não tenho cadastro</Link>
      </Paper>
    </Container>
  )
}

export default Login
