import { type LoadOrders } from '@/domain/usecases'
import {
  type HttpResponse,
  type Controller
} from '@/presentation/protocols'
import { ok } from '@/presentation/helpers'

export class LoadOrdersController implements Controller {
  constructor (private readonly repository: LoadOrders) { }
  async handle (request: any): Promise<HttpResponse> {
    const { query } = request
    const filter = query ? { ...query } : {}
    const orders = await this.repository.load(filter)
    return ok(orders)
  }
}
