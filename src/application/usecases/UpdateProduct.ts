import {
  type UpdateProductParams,
  type IUpdateProduct
} from '@/application/usecases/ports'
import { type IUpdateProductRepository } from '@/infrastructure'

export class UpdateProduct implements IUpdateProduct {
  constructor (private readonly _repository: IUpdateProductRepository) { }
  async update (params: UpdateProductParams): Promise<void> {
    await this._repository.update(params)
  }
}
