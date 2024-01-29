import { type ILoadProducts } from '@/domain/ports'
import {
  ok,
  noContent,
  serverError
} from '@/presentation/helpers'
import {
  type IController,
  type IHTTPResponse
} from '@/presentation/protocols'

export class LoadProductsController implements IController {
  constructor (private readonly loadProducts: ILoadProducts) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { query } = request
      const filter = query ? { ...query } : {}
      const products = await this.loadProducts.load(filter)
      return (products.length > 0) ? ok(products) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
