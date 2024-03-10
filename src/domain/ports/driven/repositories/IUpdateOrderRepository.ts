import { type UpdateOrderParams } from '@/domain/ports/driving/services'

export interface IUpdateOrderRepository {
  updateOrder: (params: UpdateOrderParams) => Promise<void>
}
