import { type IUpdateOrder } from '@/core/ports/driving/services'
import { UpdateOrder } from '@/application/usecases'
import { OrderMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbUpdateOrder = (): IUpdateOrder => {
  const repository = new OrderMongoRepository()
  return new UpdateOrder(repository)
}
