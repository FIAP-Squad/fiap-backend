import { type Order } from '@/domain/entities'
import { type ILoadOrders } from '@/domain/ports/driving/services'
import { type ILoadOrdersRepository } from '@/domain/ports/driven'
import { LoadOrders } from '@/application/usecases'

const mockOrders = (): Order[] => ([
  {
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
  },
  {
    customer: 'other_customer',
    products: [
      {
        id: '65aa013deca75aaae89c3a1b',
        totalItems: 2,
        unitPrice: 2000,
        amount: 4000
      }
    ],
    status: 'other_status',
    createdAt: new Date().getTime(),
    amount: 4000
  }
])

const mockOrdersRepository = (): ILoadOrdersRepository => {
  class LoadOrdersRepositoryStub implements ILoadOrdersRepository {
    async loadAll (): Promise<Order[]> {
      return await Promise.resolve(mockOrders())
    }
  }
  return new LoadOrdersRepositoryStub()
}

interface SutTypes {
  sut: ILoadOrders
  loadOrdersRepositoryStub: ILoadOrdersRepository
}

const mockSut = (): SutTypes => {
  const loadOrdersRepositoryStub = mockOrdersRepository()
  const sut = new LoadOrders(loadOrdersRepositoryStub)
  return {
    sut,
    loadOrdersRepositoryStub
  }
}

describe('ILoadOrders Usecase', () => {
  test('Should call ILoadOrdersRepository', async () => {
    const { sut, loadOrdersRepositoryStub } = mockSut()
    const loadAllSpy = jest.spyOn(loadOrdersRepositoryStub, 'loadAll')
    await sut.loadAll({})
    expect(loadAllSpy).toHaveBeenCalled()
  })

  test('Should return a list of Orders on success', async () => {
    const { sut } = mockSut()
    const orders = await sut.loadAll({})
    expect(orders).toEqual(mockOrders())
  })

  test('Should throw if ILoadOrdersRepository throws', async () => {
    const { sut, loadOrdersRepositoryStub } = mockSut()
    jest.spyOn(loadOrdersRepositoryStub, 'loadAll').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.loadAll({})
    await expect(promise).rejects.toThrow()
  })
})
