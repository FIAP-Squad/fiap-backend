import { type IDeleteProduct } from '@/core/ports/driving/services'
import { type IDeleteProductRepository } from '@/core/ports/driven/repositories'

export class DeleteProduct implements IDeleteProduct {
  constructor (private readonly _repository: IDeleteProductRepository) { }
  async delete (id: string): Promise<void> {
    await this._repository.delete(id)
  }
}
