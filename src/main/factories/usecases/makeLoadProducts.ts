import { type ILoadProducts } from '@/domain/ports/driving/services'
import { LoadProducts } from '@/application/usecases'
import { ProductMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbLoadProducts = (): ILoadProducts => {
  const repository = new ProductMongoRepository()
  return new LoadProducts(repository)
}
