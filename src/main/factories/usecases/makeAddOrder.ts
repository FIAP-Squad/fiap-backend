import { type IAddOrder } from '@/core/ports/driving/services'
import { AddOrder } from '@/application/usecases'
import { OrderMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbAddOrder = (): IAddOrder => {
  const repository = new OrderMongoRepository()
  return new AddOrder(repository)
}
