import { type ILoadProducts } from '@/application/usecases/ports'
import {
  ok,
  noContent,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IHTTPResponse
} from '@/application/presentation/ports'

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
