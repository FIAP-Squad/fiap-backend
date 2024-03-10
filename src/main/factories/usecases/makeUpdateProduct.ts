import { type IUpdateProduct } from '@/domain/interfaces/driving/services'
import { UpdateProduct } from '@/application/usecases'
import { ProductMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbUpdateProduct = (): IUpdateProduct => {
  const repository = new ProductMongoRepository()
  return new UpdateProduct(repository)
}
