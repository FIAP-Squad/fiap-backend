import { type Product } from '@/domain/entities'
import { type ILoadProductById } from '@/domain/interfaces/driving/usecases'
import { type ILoadProductByIdRepository } from '@/domain/interfaces/driven'

export class LoadProductById implements ILoadProductById {
  constructor (private readonly _repository: ILoadProductByIdRepository) { }
  async loadById (id: string): Promise<Product> {
    return await this._repository.loadById(id)
  }
}
