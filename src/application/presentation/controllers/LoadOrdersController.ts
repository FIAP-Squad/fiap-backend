import { type ILoadOrders } from '@/domain/interfaces/driving/usecases'
import {
  type IHTTPResponse,
  type IController
} from '@/application/presentation/ports'
import { noContent, ok, serverError } from '@/application/presentation/helpers'

export class LoadOrdersController implements IController {
  constructor (private readonly _repository: ILoadOrders) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { query } = request
      const filter = query ? { ...query } : {}
      const orders = await this._repository.loadAll(filter)
      return (orders.length > 0) ? ok(orders) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
