import React from 'react'
import {
  Paper,
  Typography,
  IconButton,
  TextField,
  Button,
  Box,
} from '@material-ui/core'
import { CloseOutlined } from '@material-ui/icons'

import useStyles from './styles'

interface PasswordResetProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const PasswordReset: React.FC<PasswordResetProps> = ({ setModalOpen }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.modalStyle}>
      <Box className={classes.title}>
        <Typography variant="h6">Esqueci minha senha</Typography>
        <IconButton onClick={() => setModalOpen(false)}>
          <CloseOutlined />
        </IconButton>
      </Box>
      <Typography>
        Digite seu e-mail cadastrado para receber o endereço de recuperação de
        senha.
      </Typography>
      <TextField type="email" label="E-mail" />
      <Button variant="contained" color="primary">
        Confirmar
      </Button>
    </Paper>
  )
}

export default PasswordReset
