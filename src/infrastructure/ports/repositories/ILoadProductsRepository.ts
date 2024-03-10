import { type Product } from '@/domain/types'

export interface ILoadProductsRepository {
  loadAll: (filter: any) => Promise<Product[]>
}
