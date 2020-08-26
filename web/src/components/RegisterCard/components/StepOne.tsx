import React from 'react'

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from '@material-ui/core'

import { useRegistrationContext } from '../../../contexts/RegistrationContext'

import useStyles from '../styles'

const StepOne: React.FC = () => {
  const classes = useStyles()

  const {
    legalPerson,
    setLegalPerson,
    name,
    setName,
    cpf,
    setCpf,
    cnpj,
    setCnpj,
  } = useRegistrationContext()

  return (
    <>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="legal person"
          name="legalperson"
          className={classes.radioGroup}
          value={legalPerson}
          onChange={(e) => setLegalPerson(e.target.value)}
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
          label="Nome completo"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      {legalPerson === 'juridical' && (
        <TextField
          className={classes.inputMT}
          label="Razão social"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      {legalPerson === 'physical' && (
        <TextField
          className={classes.inputMT}
          label="CPF"
          variant="outlined"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      )}
      {legalPerson === 'juridical' && (
        <TextField
          className={classes.inputMT}
          label="CNPJ"
          variant="outlined"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
      )}
    </>
  )
}

export default StepOne
