import { RequiredFieldsValidation, ValidationComposite } from '@/application/validation'
import { type IValidation } from '@/domain/ports/driving/presentation'

export const makeAddProductValidation = (): IValidation => {
  const validations: IValidation[] = []
  for (const field of ['name', 'category', 'price', 'description', 'image']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
