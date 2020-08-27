export function validateName(name: string) {
  if (name.length === 0) return 'Campo obrigatório'
  else if (name.length <= 3) return 'Muito curto'
  else return ''
}

export function validateCpf(cpf: string) {
  const model = /^[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}$/
  if(!(cpf.match(model))) return 'Deve conter 11 números'
  else return ''
}

export function validateCnpj(cnpj: string) {
  const model = /^[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2}$/
  if(!(cnpj.match(model))) return 'Deve conter 14 números'
  else return ''
}

export function validateEmail(email: string) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const ok = re.test(String(email).toLowerCase())
  return ok ? '' : 'E-mail inválido'
}

export function validateEmailConfirmation(emailConfirmation: string, email: string) {
  return emailConfirmation === email ? '' : 'Campos não conferem'
}

export function validatePassword(password: string) {
  const lowerCaseLetters = /[a-z]/g
  const upperCaseLetters = /[A-Z]/g
  const numbers = /[0-9]/g
  const specialCharacters = /[!@#$%^&*]/g
  if(!(password.match(lowerCaseLetters))) return 'Deve conter ao menos uma letra minúscula'
  else if(!(password.match(upperCaseLetters))) return 'Deve conter ao menos uma letra maiúscula'
  else if(!(password.match(numbers))) return 'Deve conter ao menos um número'
  else if(!(password.match(specialCharacters))) return 'Deve conter ao menos um caractere especial'
  else if(password.length < 8) return 'Deve conter ao menos 8 caracteres'
  else return ''
}

export function validatePasswordConfirmation(passwordConfirmation: string, password: string) {
  return passwordConfirmation === password ? '' : 'Campos não conferem'
}