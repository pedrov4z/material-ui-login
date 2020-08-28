import React, { useState } from 'react'

import {
  Box,
  Typography,
  IconButton,
  Grid,
  Paper,
  Avatar,
} from '@material-ui/core'

import {
  ExpandMore,
  ExpandLess,
  PermIdentity,
  Domain,
  ContactPhone,
} from '@material-ui/icons'

import useStyles from './styles'

interface ClientsListProps {
  clients: client[]
}

interface client {
  id: number
  name: string
  cnpj: string
  contactInformation: object[]
}

const ClientsList: React.FC<ClientsListProps> = ({ clients }) => {
  const [expanded, setExpanded] = useState(true)

  const classes = useStyles()

  function toggleExpansion() {
    setExpanded(!expanded)
  }

  return (
    <Box mt={3}>
      <Box onClick={toggleExpansion} className={classes.titleBar}>
        <Typography variant="h5">Clientes</Typography>
        <IconButton>{expanded ? <ExpandLess /> : <ExpandMore />}</IconButton>
      </Box>

      {expanded && (
        <Paper className={classes.clientsPaper}>
          <Grid container spacing={3}>
            {clients.map((client: any) => (
              <Grid item xs={12} sm={6} key={client.id}>
                <Paper className={classes.clientPaper}>
                  <Box>
                    <Avatar />
                  </Box>
                  <Box className={classes.profileInfo}>
                    <Box className={classes.typographyWithIcon}>
                      <PermIdentity />
                      <Typography variant="h6">{client.name}</Typography>
                    </Box>
                    <Box className={classes.typographyWithIcon}>
                      <Domain />
                      <Typography>{client.cnpj}</Typography>
                    </Box>

                    {client.contactInformation.map((info: any) => (
                      <Box className={classes.typographyWithIcon}>
                        <ContactPhone />
                        <Typography>{info.cellphone}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}
    </Box>
  )
}

export default ClientsList
