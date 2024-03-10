import { type IDeleteProduct } from '@/application/usecases/ports'
import {
  noContent,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IHTTPResponse
} from '@/application/presentation/ports'

export class DeleteProductController implements IController {
  constructor (private readonly _usecase: IDeleteProduct) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { id } = request.params
      await this._usecase.delete(id)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
