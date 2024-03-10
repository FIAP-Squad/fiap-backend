import { RequiredFieldsValidation, ValidationComposite } from '@/application/validation'
import { type IValidation } from '@/application/presentation/ports'

export const makeLogoutValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  for (const field of ['email']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
