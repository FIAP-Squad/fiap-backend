import { type UpdateOrderParams } from '@/application/usecases/ports'

export interface IUpdateOrderRepository {
  updateOrder: (params: UpdateOrderParams) => Promise<void>
}
