import {
  type IHTTPResponse,
  type IController,
  type IValidation,
  type IHTTPRequest
} from '@/core/ports/driving/presentation'
import { badRequest, noContent, serverError } from '../helpers'
import { type IUpdateOrder } from '@/core/ports/driving/services'

export class UpdateOrderController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _usecase: IUpdateOrder
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { id } = request.params
      const { status } = request.body
      await this._usecase.update({ id, status })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
