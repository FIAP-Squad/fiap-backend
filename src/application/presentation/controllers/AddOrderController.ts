import {
  type IHTTPResponse,
  type IController,
  type IValidation
} from '@/application/presentation/ports'
import { badRequest, ok, serverError } from '@/application/presentation/helpers'
import { type IAddOrder } from '@/domain/interfaces/driving/usecases'

export class AddOrderController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _usecase: IAddOrder
  ) { }

  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const code = await this._usecase.add(request.body)
      return ok({ code })
    } catch (error) { return serverError(error) }
  }
}
