import { type Product } from '@/domain/types'

export type AddProductParams = Omit<Product, 'id'>

export interface IAddProduct {
  add: (params: AddProductParams) => Promise<void>
}
