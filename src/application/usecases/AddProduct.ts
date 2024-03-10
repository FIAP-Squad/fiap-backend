import { type IAddProduct, type AddProductParams } from '@/application/usecases/ports'
import { type IAddProductRepository } from '@/infrastructure'

export class AddProduct implements IAddProduct {
  constructor (private readonly _repository: IAddProductRepository) { }
  async add (params: AddProductParams): Promise<void> {
    await this._repository.add(params)
  }
}
