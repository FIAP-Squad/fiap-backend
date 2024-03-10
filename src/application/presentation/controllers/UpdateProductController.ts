import { type IUpdateProduct } from '@/domain/ports/driving/services/IUpdateProducts'
import {
  type IValidation,
  type IController,
  type IHTTPRequest,
  type IHTTPResponse
} from '@/domain/ports/driving/presentation'
import { badRequest, noContent, serverError } from '@/application/presentation/helpers'

export class UpdateProductController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _usecase: IUpdateProduct
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { body } = request
      const { id } = request.params
      await this._usecase.update({ id, body })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
