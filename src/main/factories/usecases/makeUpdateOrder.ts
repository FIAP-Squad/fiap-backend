import { type IUpdateOrder } from '@/domain/ports/driving/services'
import { UpdateOrder } from '@/application/usecases'
import { OrderMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbUpdateOrder = (): IUpdateOrder => {
  const repository = new OrderMongoRepository()
  return new UpdateOrder(repository)
}
