import { type IValidation } from '@/application/presentation/ports'
import { MandatoryFieldValidation, ValidationComposite } from '@/application/validation'
import { makeUpdateOrderValidation } from '@/main/factories/validations'

jest.mock('@/application/validation/ValidationComposite')

describe('Add Order IValidation Factory', () => {
  test('Should call validation with all validations ', () => {
    makeUpdateOrderValidation()
    const validations: IValidation[] = []
    const fields = ['status', 'payment']
    validations.push(new MandatoryFieldValidation(fields))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
