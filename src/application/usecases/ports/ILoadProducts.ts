import { type Product } from '@/domain/types'

export interface ILoadProducts {
  load: (filter: any) => Promise<Product[]>
}
