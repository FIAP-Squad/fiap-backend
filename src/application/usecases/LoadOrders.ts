import { type Order } from '@/domain/types'
import { type ILoadOrders } from '@/application/usecases/ports'
import { type ILoadOrdersRepository } from '@/infrastructure/ports'

export class LoadOrders implements ILoadOrders {
  constructor (private readonly _repository: ILoadOrdersRepository) { }
  async loadAll (filter: any): Promise<Order[]> {
    return await this._repository.loadAll(filter)
  }
}
