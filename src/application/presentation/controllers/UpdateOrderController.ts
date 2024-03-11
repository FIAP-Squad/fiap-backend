import {
  type IHTTPResponse,
  type IController,
  type IValidation,
  type IHTTPRequest
} from '@/application/presentation/ports'
import { badRequest, noContent, serverError } from '@/application/presentation/helpers'
import { type IUpdateOrder } from '@/application/usecases/ports'

export class UpdateOrderController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _usecase: IUpdateOrder
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { code } = request.params
      const { body } = request
      await this._usecase.update({ code, body })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
