import { RequiredFieldsValidation, ValidationComposite } from '@/validation/validators'
import { type IValidation } from '@/presentation/protocols'

export const makeLogoutValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  for (const field of ['email']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
