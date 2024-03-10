import { RequiredFieldsValidation, ValidationComposite } from '@/application/validation'
import { type IValidation } from '@/application/presentation/ports'

export const makeUpdateOrderValidation = (): IValidation => {
  const validations: IValidation[] = []
  for (const field of ['status']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
