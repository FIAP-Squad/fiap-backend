import { MandatoryFieldValidation, ValidationComposite } from '@/application/validation'
import { type IValidation } from '@/application/presentation/ports'

export const makeUpdateOrderValidation = (): IValidation => {
  const validations: IValidation[] = []
  const fields = ['status', 'payment']
  validations.push(new MandatoryFieldValidation(fields))
  return new ValidationComposite(validations)
}
