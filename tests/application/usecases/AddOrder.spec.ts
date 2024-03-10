import {
  type IAddOrderRepository
} from '@/infrastructure/ports'
import { AddOrder } from '@/application/usecases'
import { type Order } from '@/domain/entities'

const mockAddOrderParams = (): Order => ({
  customer: 'any_customer',
  products: [
    {
      id: '65aa013deca75aaae89c3a1b',
      totalItems: 2,
      unitPrice: 2000,
      amount: 4000
    }
  ],
  status: 'any_status',
  createdAt: new Date().getTime(),
  amount: 4000
})

const mockAddOrderRepository = (): IAddOrderRepository => {
  class AddOrderRepositoryStub implements IAddOrderRepository {
    async addOrderTransaction (params: Order): Promise<void> {
      return await Promise.resolve(null)
    }
  }
  const addOrderRepositoryStub = new AddOrderRepositoryStub()
  return addOrderRepositoryStub
}

type SutTypes = {
  sut: AddOrder
  addOrderRepositoryStub: IAddOrderRepository
}

const mockSut = (): SutTypes => {
  const addOrderRepositoryStub = mockAddOrderRepository()
  const sut = new AddOrder(addOrderRepositoryStub)
  return {
    sut,
    addOrderRepositoryStub
  }
}

describe('AddOrder Usecase', () => {
  test('Should call IAddOrderRepository usign correct values', async () => {
    const { sut, addOrderRepositoryStub } = mockSut()
    const addSpy = jest.spyOn(addOrderRepositoryStub, 'addOrderTransaction')
    const addOrderData = mockAddOrderParams()
    await sut.add(addOrderData)
    expect(addSpy).toHaveBeenCalled()
  })

  test('Shoud throw Error if IHasher Throw Error', async () => {
    const { sut, addOrderRepositoryStub } = mockSut()
    jest.spyOn(addOrderRepositoryStub, 'addOrderTransaction').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.add(mockAddOrderParams())
    await expect(promise).rejects.toThrow()
  })
})
