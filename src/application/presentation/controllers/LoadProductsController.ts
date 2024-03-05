import { type ILoadProducts } from '@/core/ports/driving/services'
import {
  ok,
  noContent,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IHTTPResponse
} from '@/core/ports/driving/presentation'

export class LoadProductsController implements IController {
  constructor (private readonly _usecase: ILoadProducts) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { query } = request
      const filter = query ? { ...query } : {}
      const products = await this._usecase.load(filter)
      return (products.length > 0) ? ok(products) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
