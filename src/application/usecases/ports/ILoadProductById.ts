import { type Product } from '@/domain/types'

export interface ILoadProductById {
  loadById: (id: string) => Promise<Product>
}
