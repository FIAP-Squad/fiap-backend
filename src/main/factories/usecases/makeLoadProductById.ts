import { type ILoadProductById } from '@/core/ports/driving/services'
import { LoadProductById } from '@/application/usecases'
import { ProductMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbLoadProductById = (): ILoadProductById => {
  const repository = new ProductMongoRepository()
  return new LoadProductById(repository)
}
