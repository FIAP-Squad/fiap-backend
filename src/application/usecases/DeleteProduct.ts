import { type IDeleteProduct } from '@/domain/interfaces/driving/services'
import { type IDeleteProductRepository } from '@/domain/interfaces/driven/repositories'

export class DeleteProduct implements IDeleteProduct {
  constructor (private readonly _repository: IDeleteProductRepository) { }
  async delete (params: string): Promise<void> {
    await this._repository.delete(params)
  }
}
