import { RequiredFieldsValidation, ValidationComposite } from '@/application/validation'
import { type IValidation } from '@/application/presentation/ports'

export const makeAddProductValidation = (): IValidation => {
  const validations: IValidation[] = []
  for (const field of ['name', 'category', 'price', 'description', 'image']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
