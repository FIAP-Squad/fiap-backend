import { type UpdateOrderParams } from '@/domain/interfaces/driving/services'

export interface IUpdateOrderRepository {
  updateOrder: (params: UpdateOrderParams) => Promise<void>
}
