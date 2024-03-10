export enum ENUM_VALUE_OBJECTS {
  CPF = 'CPF',
  EMAIL = 'email',
  NAME = 'name',
  PASSWORD = 'password',
  ROLE = 'role'
}

type DomainErrorParams = {
  valueObject: string
  value: string
}

export class DomainError extends Error {
  constructor ({ value, valueObject }: DomainErrorParams) {
    super(value)
    this.message = value
    this.name = `Invalid${valueObject}Error`
  }
}
