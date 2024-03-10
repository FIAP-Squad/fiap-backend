import { type AddProductParams } from '@/domain/ports/driving/services/IAddProduc'

export interface IAddProductRepository {
  add: (params: AddProductParams) => Promise<void>
}
