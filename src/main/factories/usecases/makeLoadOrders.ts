import { type ILoadOrders } from '@/domain/interfaces/driving/usecases'
import { LoadOrders } from '@/application/usecases'
import { OrderMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbLoadOrders = (): ILoadOrders => {
  const repository = new OrderMongoRepository()
  return new LoadOrders(repository)
}
