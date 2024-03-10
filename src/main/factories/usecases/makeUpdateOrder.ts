import { type IUpdateOrder } from '@/domain/interfaces/driving/usecases'
import { UpdateOrder } from '@/application/usecases'
import { OrderMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbUpdateOrder = (): IUpdateOrder => {
  const repository = new OrderMongoRepository()
  return new UpdateOrder(repository)
}
