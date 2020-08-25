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
  Grid,
  Hidden,
} from '@material-ui/core'

import { ExitToApp } from '@material-ui/icons'

import WLSlogo from '../../assets/images/logo-wls.png'
import NotebookImg from '../../assets/images/notebook.png'

import useStyles from './styles'

const Login: React.FC = () => {
  const classes = useStyles()

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
                Login
              </Typography>
            </Box>

            <Box className={classes.loginForm}>
              <TextField label="E-mail" variant="outlined" />
              <TextField
                label="Senha"
                variant="outlined"
                type="password"
                className={classes.passwordInput}
              />
              <Grid container alignItems="center" justify="center">
                <Grid item xs={12} sm={8}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Switch color="primary" />}
                      label="Lembrar-me"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={4} justify="center">
                  <Link>Esqueci minha senha</Link>
                </Grid>
              </Grid>
            </Box>

            <Button variant="contained" color="primary">
              Fazer login
            </Button>

            <Link className={classes.loginOptions}>Não tenho cadastro</Link>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
