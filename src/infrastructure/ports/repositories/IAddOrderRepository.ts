import { type Order } from '@/domain/types'

export type OrderWithCode = Order & { code: string }

export interface IAddOrderRepository {
  addOrderTransaction: (params: OrderWithCode) => Promise<void>
}
