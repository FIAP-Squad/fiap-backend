import {
  type UpdateProductParams,
  type IUpdateProduct
} from '@/domain/interfaces/driving/usecases'
import { type IUpdateProductRepository } from '@/domain/interfaces/driven'

export class UpdateProduct implements IUpdateProduct {
  constructor (private readonly _repository: IUpdateProductRepository) { }
  async update (params: UpdateProductParams): Promise<void> {
    await this._repository.update(params)
  }
}
