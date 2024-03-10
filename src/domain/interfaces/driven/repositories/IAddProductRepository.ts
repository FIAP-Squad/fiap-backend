import { type AddProductParams } from '@/domain/interfaces/driving/services/IAddProduc'

export interface IAddProductRepository {
  add: (params: AddProductParams) => Promise<void>
}
