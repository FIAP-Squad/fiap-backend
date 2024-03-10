import { type ILoadProducts } from '@/core/ports/driving/services'
import { type Product } from '@/core/entities'
import { type ILoadProductsRepository } from '@/core/ports/driven/repositories'

export class LoadProducts implements ILoadProducts {
  constructor (private readonly _repository: ILoadProductsRepository) { }
  async load (filter: any): Promise<Product[]> {
    return await this._repository.loadAll(filter)
  }
}
