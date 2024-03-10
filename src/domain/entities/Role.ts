import { DomainError, ENUM_VALUE_OBJECTS } from '@/domain/errors'

export enum ENUM_ROLE {
  ADMIN = 'admin'
}

export class Role {
  private readonly _value: string
  private constructor (value: string) {
    this._value = value
  }

  static create (value: string): Role | DomainError {
    if (value) {
      if (!Role.validate(value)) return new DomainError({ value, valueObject: ENUM_VALUE_OBJECTS.ROLE })
      return new Role(value)
    }
  }

  static validate (value: string): boolean {
    if (!value || value !== 'admin') return false
    return true
  }

  get value (): string {
    return this._value
  }
}
