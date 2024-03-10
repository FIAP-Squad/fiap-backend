import { type IAddProduct, type AddProductParams } from '@/domain/interfaces/driving/services'
import { type IAddProductRepository } from '@/domain/interfaces/driven'

export class AddProduct implements IAddProduct {
  constructor (private readonly _repository: IAddProductRepository) { }
  async add (params: AddProductParams): Promise<void> {
    await this._repository.add(params)
  }
}
