import { type ILoadProductById } from '@/domain/interfaces/driving/services'
import {
  ok,
  noContent,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IHTTPResponse
} from '@/domain/interfaces/driving/presentation'

export class LoadProductByIdController implements IController {
  constructor (private readonly _usecase: ILoadProductById) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { id } = request.params
      const product = await this._usecase.loadById(id)
      return product ? ok(product) : noContent()
    } catch (error) { return serverError(error) }
  }
}
