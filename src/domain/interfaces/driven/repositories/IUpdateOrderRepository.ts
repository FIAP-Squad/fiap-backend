import { type UpdateOrderParams } from '@/domain/interfaces/driving/usecases'

export interface IUpdateOrderRepository {
  updateOrder: (params: UpdateOrderParams) => Promise<void>
}
