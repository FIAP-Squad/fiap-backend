import { type Order } from '@/domain/types'

export interface ILoadOrders {
  loadAll: (filter: any) => Promise<Order[]>
}
