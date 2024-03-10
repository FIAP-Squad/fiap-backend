import { type IAuthentication } from '@/domain/ports/driving/services'
import {
  ok,
  badRequest,
  serverError,
  unauthorized
} from '@/application/presentation/helpers'
import {
  type IController,
  type IValidation,
  type IHTTPRequest,
  type IHTTPResponse
} from '@/domain/ports/driving/presentation'

export class LoginController implements IController {
  constructor (
    private readonly _authentication: IAuthentication,
    private readonly _validation: IValidation
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { email, password } = request.body
      const accessToken = await this._authentication.auth({ email, password })
      if (!accessToken) return unauthorized()
      return ok({ access_token: accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
