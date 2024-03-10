import { type AddProductParams } from '@/application/usecases/ports/IAddProduc'

export interface IAddProductRepository {
  add: (params: AddProductParams) => Promise<void>
}
