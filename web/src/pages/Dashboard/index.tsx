import React, { useState, useEffect } from 'react'

import { Paper, Container, Typography, Link, Box } from '@material-ui/core'

import { useAuthContext } from '../../contexts/AuthContext'

import api from '../../services/api'

import useStyles from './styles'

interface client {
  id: number
  name: string
  cnpj: string
  contactInformation: object[]
}

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
    <Container className={classes.dashboardPageContainer}>
      <Paper className={classes.paper}>
        <Box className={classes.titleBar}>
          <Typography variant="h4">Olá, {user.name}</Typography>

          <Link className={classes.link} onClick={signOut}>
            Sair
          </Link>
        </Box>

        <Box mt={3}>
          {clients.map((client: client) => (
            <Box key={client.id}>
              <Typography>{client.name}</Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  )
}

export default Dashboard
