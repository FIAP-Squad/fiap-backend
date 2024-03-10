import {
  type UpdateProductParams,
  type IUpdateProduct
} from '@/domain/ports/driving/services'
import { type IUpdateProductRepository } from '@/domain/ports/driven'

export class UpdateProduct implements IUpdateProduct {
  constructor (private readonly _repository: IUpdateProductRepository) { }
  async update (params: UpdateProductParams): Promise<void> {
    await this._repository.update(params)
  }
}
