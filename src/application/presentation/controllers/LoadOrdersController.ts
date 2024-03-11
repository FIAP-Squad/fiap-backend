import { type ILoadOrders } from '@/application/usecases/ports'
import {
  type IHTTPResponse,
  type IController
} from '@/application/presentation/ports'
import { ok, serverError } from '@/application/presentation/helpers'

export class LoadOrdersController implements IController {
  constructor (private readonly _usecase: ILoadOrders) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { query } = request
      const filter = query ? { ...query } : {}
      const orders = await this._usecase.loadAll(filter)
      return (orders.length > 0) ? ok(orders) : ok([])
    } catch (error) {
      return serverError(error)
    }
  }
}
