import { type Order } from '@/domain/types'

export interface ILoadOrdersRepository {
  loadAll: (filter: any) => Promise<Order[]>
}
