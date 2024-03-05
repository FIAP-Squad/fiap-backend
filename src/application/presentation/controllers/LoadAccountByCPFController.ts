import { type ILoadAccountByCPF } from '@/core/ports/driving/services'
import {
  ok,
  notFound,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IHTTPResponse
} from '@/core/ports/driving/presentation'

export class LoadAccountByCPFController implements IController {
  constructor (private readonly _usecase: ILoadAccountByCPF) { }
  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const { cpf } = request.params
      const account = await this._usecase.loadByCpf(cpf)
      if (!account) return notFound()
      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
