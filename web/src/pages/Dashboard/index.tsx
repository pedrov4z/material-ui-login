import React from 'react'

import { Paper, Container, Typography } from '@material-ui/core'

import { useAuthContext } from '../../contexts/AuthContext'

import useStyles from './styles'

const Dashboard: React.FC = () => {
  const classes = useStyles()

  const { user } = useAuthContext()

  return(
    <Container className={classes.dashboardPageContainer}>
      <Paper className={classes.paper}>
        <Typography variant="h3">
          Olá, {!!user && user.name}
        </Typography>
      </Paper>
    </Container>
  ) 
}

export default Dashboard
