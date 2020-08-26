import React, { useState } from 'react'

import { Paper, Box, Grid, Hidden } from '@material-ui/core'

import WLSlogo from '../../assets/images/logo-wls.png'
import NotebookImg from '../../assets/images/notebook.png'

import LoginCard from '../../components/LoginCard'
import RegisterCard from '../../components/RegisterCard'

import useStyles from './styles'

export interface LoginCardProps {
  setLoginMode: React.Dispatch<React.SetStateAction<string>>
  togglePasswordVisibility(): void
  passwordVisible: boolean
}

const Login: React.FC = () => {
  const classes = useStyles()

  const [passwordVisible, setPasswordVisible] = useState(false)
  const [loginMode, setLoginMode] = useState('login')

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
          {loginMode === 'login' && (
            <LoginCard
              setLoginMode={setLoginMode}
              togglePasswordVisibility={togglePasswordVisibility}
              passwordVisible={passwordVisible}
            />
          )}
          {loginMode === 'register' && (
            <RegisterCard
              setLoginMode={setLoginMode}
              togglePasswordVisibility={togglePasswordVisibility}
              passwordVisible={passwordVisible}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
