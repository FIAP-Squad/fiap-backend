import { type Order } from '@/domain/entities'

export type UpdateOrderParams = {
  code: string
  body: Partial<Order>
}

export interface IUpdateOrder {
  update: (params: UpdateOrderParams) => Promise<void>
}
