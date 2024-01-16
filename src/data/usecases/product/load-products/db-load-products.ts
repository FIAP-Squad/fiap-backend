import { type LoadProducts } from '@/domain/usecases/product/load-products'
import {
  type LoadProductsRepository,
  type ProductModel
} from './db-load-products-protocols'

export class DbLoadProducts implements LoadProducts {
  constructor (private readonly loadProductsRepository: LoadProductsRepository) { }
  async load (): Promise<ProductModel[]> {
    return await this.loadProductsRepository.loadAll()
  }
}