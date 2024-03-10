import { UpdateOrder } from '@/application/usecases'
import { type IUpdateOrderRepository } from '@/domain/interfaces/driven'
import { type UpdateOrderParams } from '@/domain/interfaces/driving/usecases'

const mockUpdateParams = (): UpdateOrderParams => ({
  code: 'any_code',
  status: 'any_status'
})

const mockUpdateOrderRepositoryStub = (): IUpdateOrderRepository => {
  class UpdateOrderStub implements IUpdateOrderRepository {
    async updateOrder (params: any): Promise<void> {
      await Promise.resolve(null)
    }
  }
  return new UpdateOrderStub()
}

type SutTypes = {
  sut: UpdateOrder
  updateOrderRepositoryStub: IUpdateOrderRepository
}

const mockSut = (): SutTypes => {
  const updateOrderRepositoryStub = mockUpdateOrderRepositoryStub()
  const sut = new UpdateOrder(updateOrderRepositoryStub)
  return {
    sut,
    updateOrderRepositoryStub
  }
}

describe('IUpdateOrder Usecase', () => {
  test('Should call IUpdateOrder Repository with correct values', async () => {
    const { sut, updateOrderRepositoryStub } = mockSut()
    const updateSpy = jest.spyOn(updateOrderRepositoryStub, 'updateOrder')
    await sut.update(mockUpdateParams())
    expect(updateSpy).toHaveBeenCalledWith(mockUpdateParams())
  })

  test('Shoud throw Error if IUpdateOrderRepository Throw Error', async () => {
    const { sut, updateOrderRepositoryStub } = mockSut()
    jest.spyOn(updateOrderRepositoryStub, 'updateOrder').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.update(mockUpdateParams())
    await expect(promise).rejects.toThrow()
  })
})
