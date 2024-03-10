import {
  CPFValidation,
  EmailValidation,
  ValidationComposite,
  CompareFieldsValidation,
  RequiredFieldsValidation
} from '@/application/validation'
import { type IValidation } from '@/domain/ports/driving/presentation'
import { EmailValidatorAdapter } from '@/infrastructure/validators'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  for (const field of ['name', 'cpf', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  validations.push(new CPFValidation('cpf'))
  return new ValidationComposite(validations)
}
