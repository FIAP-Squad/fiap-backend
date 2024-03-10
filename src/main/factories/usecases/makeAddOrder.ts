import { type IAddOrder } from '@/domain/interfaces/driving/usecases'
import { AddOrder } from '@/application/usecases'
import { OrderMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbAddOrder = (): IAddOrder => {
  const repository = new OrderMongoRepository()
  return new AddOrder(repository)
}
