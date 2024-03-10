import { DeleteProduct } from '@/application/usecases'
import { type IDeleteProduct } from '@/application/usecases/ports'
import { ProductMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbDeleteProduct = (): IDeleteProduct => {
  const repository = new ProductMongoRepository()
  return new DeleteProduct(repository)
}
