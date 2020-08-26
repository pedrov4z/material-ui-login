import React, { useState, createContext, ReactNode, useContext } from 'react'

type RegistrationContextData = {
  legalPerson: string
  name: string
  cpf: string
  cnpj: string
  email: string
  emailConfirmation: string
  password: string
  passwordConfirmation: string
  setLegalPerson: React.Dispatch<React.SetStateAction<string>>
  setName: React.Dispatch<React.SetStateAction<string>>
  setCpf: React.Dispatch<React.SetStateAction<string>>
  setCnpj: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setEmailConfirmation: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setPasswordConfirmation: React.Dispatch<React.SetStateAction<string>>
}

interface Props {
  children: ReactNode
}

const RegistrationContext = createContext<any>(void 0)

const RegistrationProvider: React.FC<Props> = ({ children }) => {
  const [legalPerson, setLegalPerson] = useState('physical')
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

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
    cpf,
    setCpf,
    cnpj,
    setCnpj,
    email,
    setEmail,
    emailConfirmation,
    setEmailConfirmation,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
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
    cpf,
    setCpf,
    cnpj,
    setCnpj,
    email,
    setEmail,
    emailConfirmation,
    setEmailConfirmation,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
  } = context
  return {
    legalPerson,
    setLegalPerson,
    name,
    setName,
    cpf,
    setCpf,
    cnpj,
    setCnpj,
    email,
    setEmail,
    emailConfirmation,
    setEmailConfirmation,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
  }
}

export default RegistrationProvider
