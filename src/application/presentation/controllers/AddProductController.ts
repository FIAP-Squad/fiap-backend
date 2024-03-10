import { type IAddProduct } from '@/domain/ports/driving/services'
import {
  badRequest,
  noContent,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IValidation,
  type IHTTPRequest,
  type IHTTPResponse
} from '@/domain/ports/driving/presentation'

export class AddProductController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _usecase: IAddProduct
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { category, name, price, description, image } = request.body
      await this._usecase.add({ category, name, price, description, image })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
