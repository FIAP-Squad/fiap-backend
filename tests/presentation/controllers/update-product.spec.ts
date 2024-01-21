import { type HttpRequest } from '@/presentation/protocols'
import { type UpdateProductParams, type UpdateProduct } from '@/domain/usecases'
import { UpdateProductController } from '@/presentation/controllers'

const mockUpdateProduct = (): UpdateProduct => {
  class UpdateProductStub implements UpdateProduct {
    async update (params: UpdateProductParams): Promise<void> {
      return await Promise.resolve(null)
    }
  }
  return new UpdateProductStub()
}

const mockRequest = (): HttpRequest => ({
  body: {
    id: 'any_id',
    category: 'other_category',
    name: 'any_name',
    price: 'any_price',
    description: 'any_description',
    image: 'any_image'
  },
  params: {
    id: 'any_id'
  }
})

type SutTypes = {
  sut: UpdateProductController
  updateProductStub: UpdateProduct
}

const mockSut = (): SutTypes => {
  const updateProductStub = mockUpdateProduct()
  const sut = new UpdateProductController(updateProductStub)
  return {
    sut,
    updateProductStub
  }
}

describe('UpdateProductContrller', () => {
  test('Should call UpdateProduct with correct values', async () => {
    const { sut, updateProductStub } = mockSut()
    const updateSpy = jest.spyOn(updateProductStub, 'update')
    await sut.handle(mockRequest())
    expect(updateSpy).toHaveBeenCalledWith({
      id: 'any_id',
      body: {
        id: 'any_id',
        category: 'other_category',
        name: 'any_name',
        price: 'any_price',
        description: 'any_description',
        image: 'any_image'
      }
    })
  })
})
