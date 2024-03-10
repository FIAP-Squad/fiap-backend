import { type ILoadAccountByToken } from '@/domain/ports/driving/services'
import {
  type IMiddleware,
  type IHTTPRequest,
  type IHTTPResponse
} from '@/domain/ports/driving/presentation'
import { AccessDenied } from '@/application/presentation/errors'
import { ok, forbidden, serverError } from '@/application/presentation/helpers'

export class AuthMiddleware implements IMiddleware {
  constructor (
    private readonly _usecase: ILoadAccountByToken,
    private readonly _role?: string
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const authToken = request.headers.authorization
      if (!authToken) return forbidden(new AccessDenied())
      const [, token] = authToken.split(' ')
      if (token) {
        const account = await this._usecase.load(token, this._role)
        if (account) return ok({ accountId: account.id })
      }
      return forbidden(new AccessDenied())
    } catch (error) {
      return serverError(error)
    }
  }
}
