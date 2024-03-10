import { type IDeleteProduct } from '@/application/usecases/ports'
import { type IDeleteProductRepository } from '@/infrastructure/repositories/ports'

export class DeleteProduct implements IDeleteProduct {
  constructor (private readonly _repository: IDeleteProductRepository) { }
  async delete (params: string): Promise<void> {
    await this._repository.delete(params)
  }
}
