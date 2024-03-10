import { Role } from '@/domain/entities'
import { DomainError } from '@/domain/errors'

describe('Role Value Object', () => {
  test('Should return an DomainError instance if invalid value is provided', () => {
    const role = Role.create('invalid_role')
    expect(role).toBeInstanceOf(DomainError)
  })

  test('Should return an Role instance valid value is provided', () => {
    const role = Role.create('admin')
    expect(role).toBeInstanceOf(Role)
  })
})
