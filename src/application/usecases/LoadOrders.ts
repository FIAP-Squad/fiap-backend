import { type Order } from '@/domain/entities'
import { type ILoadOrders } from '@/domain/interfaces/driving/usecases'
import { type ILoadOrdersRepository } from '@/domain/interfaces/driven'

export class LoadOrders implements ILoadOrders {
  constructor (private readonly _repository: ILoadOrdersRepository) { }
  async loadAll (filter: any): Promise<Order[]> {
    return await this._repository.loadAll(filter)
  }
}
