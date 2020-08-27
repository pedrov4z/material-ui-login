import React, { useState, createContext, ReactNode, useContext } from 'react'

type RegistrationContextData = {
  legalPerson: string
  name: string
  nameError: string
  cpf: string
  cpfError: string
  cnpj: string
  cnpjError: string
  email: string
  emailError: string
  emailConfirmation: string
  emailConfirmationError: string
  password: string
  passwordError: string
  passwordConfirmation: string
  passwordConfirmationError: string
  setLegalPerson: React.Dispatch<React.SetStateAction<string>>
  setName: React.Dispatch<React.SetStateAction<string>>
  setNameError: React.Dispatch<React.SetStateAction<string>>
  setCpf: React.Dispatch<React.SetStateAction<string>>
  setCpfError: React.Dispatch<React.SetStateAction<string>>
  setCnpj: React.Dispatch<React.SetStateAction<string>>
  setCnpjError: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setEmailError: React.Dispatch<React.SetStateAction<string>>
  setEmailConfirmation: React.Dispatch<React.SetStateAction<string>>
  setEmailConfirmationError: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setPasswordError: React.Dispatch<React.SetStateAction<string>>
  setPasswordConfirmation: React.Dispatch<React.SetStateAction<string>>
  setPasswordConfirmationError: React.Dispatch<React.SetStateAction<string>>
}

interface Props {
  children: ReactNode
}

const RegistrationContext = createContext<any>(void 0)

const RegistrationProvider: React.FC<Props> = ({ children }) => {
  const [legalPerson, setLegalPerson] = useState('physical')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [cpf, setCpf] = useState('')
  const [cpfError, setCpfError] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cnpjError, setCnpjError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')
  const [emailConfirmationError, setEmailConfirmationError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('')

  /* const addTodo = (todo: ToDo) => {
    const { id, concluido, titulo, descricao } = todo

    const newTodo = {
      id,
      concluido,
      titulo,
      descricao
    }
    setTodos([...todos, newTodo])
  }

  const changeTodo = (todo: ToDo) => {
    let currentTodos = todos;

    let foundIndex = currentTodos.findIndex(x => x.id === todo.id);

    currentTodos[foundIndex] = todo;

    setTodos(currentTodos)
  }

  const removeTodo = (todo: ToDo["id"]) => {
    let currentTodos = todos;

    const newPointer = currentTodos.filter(x => x.id !== todo);

    setTodos(newPointer)
  } */

  const values = {
    legalPerson,
    setLegalPerson,
    name,
    setName,
    nameError,
    setNameError,
    cpf,
    setCpf,
    cpfError,
    setCpfError,
    cnpj,
    setCnpj,
    cnpjError,
    setCnpjError,
    email,
    setEmail,
    emailError,
    setEmailError,
    emailConfirmation,
    setEmailConfirmation,
    emailConfirmationError,
    setEmailConfirmationError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    passwordConfirmation,
    setPasswordConfirmation,
    passwordConfirmationError,
    setPasswordConfirmationError,
  }

  return (
    <RegistrationContext.Provider
      value={values}
    >
      {children}
    </RegistrationContext.Provider>
  )
}

export function useRegistrationContext() {
  const context = useContext(RegistrationContext)
  const {
    legalPerson,
    setLegalPerson,
    name,
    setName,
    nameError,
    setNameError,
    cpf,
    setCpf,
    cpfError,
    setCpfError,
    cnpj,
    setCnpj,
    cnpjError,
    setCnpjError,
    email,
    setEmail,
    emailError,
    setEmailError,
    emailConfirmation,
    setEmailConfirmation,
    emailConfirmationError,
    setEmailConfirmationError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    passwordConfirmation,
    setPasswordConfirmation,
    passwordConfirmationError,
    setPasswordConfirmationError,
  } = context
  return {
    legalPerson,
    setLegalPerson,
    name,
    setName,
    nameError,
    setNameError,
    cpf,
    setCpf,
    cpfError,
    setCpfError,
    cnpj,
    setCnpj,
    cnpjError,
    setCnpjError,
    email,
    setEmail,
    emailError,
    setEmailError,
    emailConfirmation,
    setEmailConfirmation,
    emailConfirmationError,
    setEmailConfirmationError,
    password,
    setPassword,
    passwordError,
    setPasswordError,
    passwordConfirmation,
    setPasswordConfirmation,
    passwordConfirmationError,
    setPasswordConfirmationError,
  }
}

export default RegistrationProvider
