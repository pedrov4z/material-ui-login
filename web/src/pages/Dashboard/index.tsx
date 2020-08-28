import React, { useState, useEffect } from 'react'

import {
  Paper,
  Typography,
  Link,
  Box,
  Grid,
} from '@material-ui/core'

import { useAuthContext } from '../../contexts/AuthContext'

import api from '../../services/api'

import ClientsList from '../../components/ClientsList'

import useStyles from './styles'

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuthContext()

  const [clients, setClients] = useState([])

  const classes = useStyles()

  useEffect(() => {
    if (user.role === 'ADMIN') {
      api
        .get('clients')
        .then((response) => {
          setClients(response.data)
        })
        .catch((error) => {
          alert(error)
        })
    }
  }, [user])

  return (
    <Grid container className={classes.dashboardPageContainer}>
      <Grid item xs={12} sm={8}>
        <Paper className={classes.paper}>
          <Box className={classes.titleBar}>
            <Typography variant="h4">Olá, {user.name}</Typography>

            <Link className={classes.link} onClick={signOut}>
              Sair
            </Link>
          </Box>

          {user.role === 'ADMIN' && <ClientsList clients={clients} />}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Dashboard
