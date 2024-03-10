import {
  type UpdateOrderParams,
  type IUpdateOrder
} from '@/domain/ports/driving/services'
import { type IUpdateOrderRepository } from '@/domain/ports/driven'

export class UpdateOrder implements IUpdateOrder {
  constructor (private readonly _repository: IUpdateOrderRepository) { }
  async update (params: UpdateOrderParams): Promise<void> {
    await this._repository.updateOrder(params)
  }
}
