import { type ILoadProducts } from '@/domain/interfaces/driving/usecases'
import { LoadProducts } from '@/application/usecases'
import { ProductMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbLoadProducts = (): ILoadProducts => {
  const repository = new ProductMongoRepository()
  return new LoadProducts(repository)
}
