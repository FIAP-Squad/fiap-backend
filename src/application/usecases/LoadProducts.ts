import { type ILoadProducts } from '@/application/usecases/ports'
import { type Product } from '@/domain/entities'
import { type ILoadProductsRepository } from '@/infrastructure/ports/repositories'

export class LoadProducts implements ILoadProducts {
  constructor (private readonly _repository: ILoadProductsRepository) { }
  async load (filter: any): Promise<Product[]> {
    return await this._repository.loadAll(filter)
  }
}
