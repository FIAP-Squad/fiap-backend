import { type IAddOrder } from '@/application/usecases/ports'
import { AddOrder } from '@/application/usecases'
import { OrderMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbAddOrder = (): IAddOrder => {
  const repository = new OrderMongoRepository()
  return new AddOrder(repository)
}
