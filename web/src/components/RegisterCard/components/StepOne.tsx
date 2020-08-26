import React from 'react'

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from '@material-ui/core'

import NumberFormat from 'react-number-format'

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

  const capitalize = (str: string, lower: boolean = false) =>
    (lower ? str.toLowerCase() : str).replace(
      /(?:^|\s|["'([{])+\S/g,
      (match: string) => match.toUpperCase()
    )

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
          onBlur={(e) => {
            setName(capitalize(e.target.value))
          }}
        />
      )}
      {legalPerson === 'juridical' && (
        <TextField
          className={classes.inputMT}
          label="Razão social"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => setName(capitalize(e.target.value))}
        />
      )}

      {legalPerson === 'physical' && (
        <NumberFormat
          className={classes.inputMT}
          label="CPF"
          // error=""
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          // helperText=""
          customInput={TextField}
          variant="outlined"
          format="###.###.###-##"
          mask="_"
        />
      )}
      {legalPerson === 'juridical' && (
        <NumberFormat
          className={classes.inputMT}
          label="CNPJ"
          // error=""
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          // helperText=""
          customInput={TextField}
          variant="outlined"
          format="##.###.###/####-##"
          mask="_"
        />
      )}
    </>
  )
}

export default StepOne
