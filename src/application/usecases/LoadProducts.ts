import { type ILoadProducts } from '@/domain/ports/driving/services'
import { type Product } from '@/domain/entities'
import { type ILoadProductsRepository } from '@/domain/ports/driven/repositories'

export class LoadProducts implements ILoadProducts {
  constructor (private readonly _repository: ILoadProductsRepository) { }
  async load (filter: any): Promise<Product[]> {
    return await this._repository.loadAll(filter)
  }
}
