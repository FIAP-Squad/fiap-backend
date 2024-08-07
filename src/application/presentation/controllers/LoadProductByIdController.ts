import { type ILoadProductById } from '@/application/usecases/ports'
import {
  ok,
  noContent,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IHTTPResponse
} from '@/application/presentation/ports'

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
