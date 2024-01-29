import { DbLoadProductById } from '@/data/ports'
import { type ProductModel } from '@/domain/models'
import { type ILoadProductByIdRepository } from '@/data/adapters'

const mockProduct = (): ProductModel => ({
  id: 'any_id',
  category: 'any_category',
  name: 'any_name',
  price: 'any_price',
  description: 'any_description',
  image: 'any_image'
})

const mockLoadProductByIdRepository = (): ILoadProductByIdRepository => {
  class LoadProductByIdRepositoryStub implements ILoadProductByIdRepository {
    async loadById (id: string): Promise<ProductModel> {
      return await Promise.resolve(mockProduct())
    }
  }
  return new LoadProductByIdRepositoryStub()
}

type SutTypes = {
  sut: DbLoadProductById
  loadProductByIdRepositoryStub: ILoadProductByIdRepository
}

const mockSut = (): SutTypes => {
  const loadProductByIdRepositoryStub = mockLoadProductByIdRepository()
  const sut = new DbLoadProductById(loadProductByIdRepositoryStub)
  return {
    sut,
    loadProductByIdRepositoryStub
  }
}

describe('LoadProductById Usecase', () => {
  test('Should call ILoadProductByIdRepository with correct values', async () => {
    const { sut, loadProductByIdRepositoryStub } = mockSut()
    const loadByIdSpy = jest.spyOn(loadProductByIdRepositoryStub, 'loadById')
    await sut.loadById('any_productId')
    expect(loadByIdSpy).toHaveBeenCalledWith('any_productId')
  })

  test('Should thorws if ILoadProductByIdRepository throws', async () => {
    const { sut, loadProductByIdRepositoryStub } = mockSut()
    jest.spyOn(loadProductByIdRepositoryStub, 'loadById').mockReturnValueOnce(Promise.reject(new Error()))
    const promise = sut.loadById('any_productId')
    await expect(promise).rejects.toThrow()
  })

  test('Should return a product on success', async () => {
    const { sut } = mockSut()
    const product = await sut.loadById('any_productId')
    expect(product).toEqual(mockProduct())
  })
})
