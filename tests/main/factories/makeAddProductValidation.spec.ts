import { type IValidation } from '@/application/presentation/ports'
import { makeAddProductValidation } from '@/main/factories/validations'
import { RequiredFieldsValidation, ValidationComposite } from '@/application/validation'

jest.mock('@/application/validation/ValidationComposite')

describe('Add Product IValidation Factory', () => {
  test('Should call validation with all validations ', () => {
    makeAddProductValidation()
    const validations: IValidation[] = []
    for (const field of ['name', 'category', 'price', 'description', 'image']) {
      validations.push(new RequiredFieldsValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
