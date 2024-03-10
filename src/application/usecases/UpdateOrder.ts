import {
  type UpdateOrderParams,
  type IUpdateOrder
} from '@/application/usecases/ports'
import { type IUpdateOrderRepository } from '@/domain/interfaces/driven'

export class UpdateOrder implements IUpdateOrder {
  constructor (private readonly _repository: IUpdateOrderRepository) { }
  async update (params: UpdateOrderParams): Promise<void> {
    await this._repository.updateOrder(params)
  }
}
