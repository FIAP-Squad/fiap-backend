import { RequiredFieldsValidation, ValidationComposite } from '@/application/validation'
import { type IValidation } from '@/application/presentation/ports'

export const makeAddOrderValidation = (): IValidation => {
  const validations: IValidation[] = []
  for (const field of ['customer', 'products', 'status', 'amount']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
