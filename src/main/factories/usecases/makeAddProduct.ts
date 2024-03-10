import { type IAddProduct } from '@/domain/ports/driving/services'
import { AddProduct } from '@/application/usecases'
import { ProductMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbAddProduct = (): IAddProduct => {
  const repository = new ProductMongoRepository()
  return new AddProduct(repository)
}
