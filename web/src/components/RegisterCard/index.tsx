import React, { useState } from 'react'
import {
  Paper,
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Button,
  RadioGroup,
  Radio,
} from '@material-ui/core'

import { ArrowBack, VisibilityOff, Visibility } from '@material-ui/icons'

import { LoginCardProps } from '../../pages/Login'

import useStyles from './styles'

const RegisterCard: React.FC<LoginCardProps> = (props) => {
  const { setLoginMode, togglePasswordVisibility, passwordVisible } = props

  const [legalPerson, setLegalPerson] = useState('physical')

  const classes = useStyles()

  return (
    <Paper className={classes.registerCard}>
      <Box className={classes.title}>
        <IconButton onClick={() => setLoginMode('login')}>
          <ArrowBack />
        </IconButton>
        <Typography className={classes.titleText} variant="h5">
          Fazer Cadastro
        </Typography>
      </Box>

      <Box className={classes.registerForm}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="legal person"
            name="legalperson"
            className={classes.radioGroup}
            defaultValue="physical"
            onChange={e => setLegalPerson(e.target.value)}
          >
            <FormControlLabel
              value="physical"
              control={<Radio color="secondary" />}
              label="Pessoa Física"
            />
            <FormControlLabel
              value="juridical"
              control={<Radio color="secondary" />}
              label="Pessoa Jurídica"
            />
          </RadioGroup>
        </FormControl>
        {legalPerson === 'physical' && (
          <TextField
            className={classes.inputMT}
            label="Nome"
            variant="outlined"
          />
        )}
        {legalPerson === 'juridical' && (
          <TextField
            className={classes.inputMT}
            label="Razão Social"
            variant="outlined"
          />
        )}
        {legalPerson === 'physical' && (
          <TextField
            className={classes.inputMT}
            label="Sobrenome"
            variant="outlined"
          />
        )}
        {legalPerson === 'juridical' && (
          <TextField
            className={classes.inputMT}
            label="Nome Fantasia"
            variant="outlined"
          />
        )}

        {legalPerson === 'physical' && (
          <TextField
            className={classes.inputMT}
            label="CPF"
            variant="outlined"
          />
        )}
        {legalPerson === 'juridical' && (
          <TextField
            className={classes.inputMT}
            label="CNPJ"
            variant="outlined"
          />
        )}
        <TextField
          className={classes.inputMT}
          label="E-mail"
          type="email"
          variant="outlined"
        />
        <FormControl className={classes.inputMT} variant="outlined">
          <InputLabel>Senha</InputLabel>
          <OutlinedInput
            type={passwordVisible ? 'text' : 'password'}
            labelWidth={45}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {passwordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          className={classes.inputMT}
          label="Confirmar senha"
          type="password"
          variant="outlined"
        />
      </Box>

      <Button className={classes.inputMT} variant="contained" color="primary">
        Enviar
      </Button>
    </Paper>
  )
}

export default RegisterCard
