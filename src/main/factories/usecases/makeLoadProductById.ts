import { type ILoadProductById } from '@/application/usecases/ports'
import { LoadProductById } from '@/application/usecases'
import { ProductMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbLoadProductById = (): ILoadProductById => {
  const repository = new ProductMongoRepository()
  return new LoadProductById(repository)
}
