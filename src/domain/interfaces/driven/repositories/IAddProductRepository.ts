import { type AddProductParams } from '@/domain/interfaces/driving/usecases/IAddProduc'

export interface IAddProductRepository {
  add: (params: AddProductParams) => Promise<void>
}
