import { type Order } from '@/domain/models'
import { type LoadOrders } from '@/domain/usecases'
import { type LoadOrdersRepository } from '@/data/protocols'

export class DbLoadOrders implements LoadOrders {
  constructor (private readonly repository: LoadOrdersRepository) { }
  async loadAll (filter: any): Promise<Order[]> {
    return await this.repository.loadAll(filter)
  }
}
