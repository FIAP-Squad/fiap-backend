import { type Product } from '@/domain/types'

export interface ILoadProductByIdRepository {
  loadById: (id: string) => Promise<Product>
}
