import {
  type IHTTPResponse,
  type IController,
  type IValidation
} from '@/core/ports/driving/presentation'
import { badRequest, ok, serverError } from '../helpers'
import { type IAddOrder } from '@/core/ports/driving/services/IAddOrder'

export class AddOrderController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _addOrder: IAddOrder
  ) { }

  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const code = await this._addOrder.add(request.body)
      return ok({ code })
    } catch (error) { return serverError(error) }
  }
}
