import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {
  Typography,
  Paper,
  Box,
  Avatar,
  Switch,
  Link,
  FormGroup,
  FormControlLabel,
  Grid,
  Hidden,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from '@material-ui/core'

import { ExitToApp, Visibility, VisibilityOff } from '@material-ui/icons'

import WLSlogo from '../../assets/images/logo-wls.png'
import NotebookImg from '../../assets/images/notebook.png'

import useStyles from './styles'

const Login: React.FC = () => {
  const classes = useStyles()

  const [passwordVisible, setPasswordVisible] = useState(false)

  function togglePasswordVisibility() {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <Grid container>
      <Hidden smDown>
        <Grid item md={7}>
          <Box className={classes.screenSection}>
            <Paper className={classes.bannerCard}>
              {' '}
              <img
                className={classes.banner}
                alt="WLS Sistemas"
                src={WLSlogo}
              />
              <img
                className={classes.banner}
                src={NotebookImg}
                alt="Tenha controle total de tudo o que realmente importa para
                fazer o seu negócio crescer e vender cada vez mais e melhor!"
              />
            </Paper>
          </Box>
        </Grid>
      </Hidden>

      <Grid item xs md={5}>
        <Box className={classes.screenSection}>
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
              <TextField label="E-mail" variant="outlined" />
              <FormControl className={classes.passwordInput} variant="outlined">
                <InputLabel>Senha</InputLabel>
                <OutlinedInput
                  type={passwordVisible ? 'text' : 'password'}
                  labelWidth={45}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {passwordVisible ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box className={classes.psswdOptions}>
                <FormGroup className={classes.switchContainer}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Lembrar-me"
                  />
                </FormGroup>
                <Link>Esqueci minha senha</Link>
              </Box>
            </Box>

            <Button variant="contained" color="primary">
              Entrar
            </Button>

            <Link className={classes.loginOptions}>Não tenho cadastro</Link>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
