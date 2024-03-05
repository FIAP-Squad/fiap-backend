import { type Order } from '@/core/entities'

export type OrderWithCode = Order & { code: string }

export interface IAddOrderRepository {
  addOrderTransaction: (params: OrderWithCode) => Promise<void>
}
