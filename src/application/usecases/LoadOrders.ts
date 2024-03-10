import { type Order } from '@/domain/entities'
import { type ILoadOrders } from '@/application/usecases/ports'
import { type ILoadOrdersRepository } from '@/infrastructure'

export class LoadOrders implements ILoadOrders {
  constructor (private readonly _repository: ILoadOrdersRepository) { }
  async loadAll (filter: any): Promise<Order[]> {
    return await this._repository.loadAll(filter)
  }
}
