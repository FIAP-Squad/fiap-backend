import { type IValidation } from '@/domain/interfaces/driving/presentation'
import {
  MandatoryFieldValidation,
  ValidationComposite
} from '@/application/validation'

export const makeUpdateProductValidation = (): IValidation => {
  const validations: IValidation[] = []
  const fields = ['name', 'category', 'price', 'description', 'image']
  validations.push(new MandatoryFieldValidation(fields))
  return new ValidationComposite(validations)
}
