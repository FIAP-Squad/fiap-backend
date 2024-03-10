import { type ILoadProducts } from '@/domain/interfaces/driving/services'
import { type Product } from '@/domain/entities'
import { type ILoadProductsRepository } from '@/domain/interfaces/driven/repositories'

export class LoadProducts implements ILoadProducts {
  constructor (private readonly _repository: ILoadProductsRepository) { }
  async load (filter: any): Promise<Product[]> {
    return await this._repository.loadAll(filter)
  }
}
