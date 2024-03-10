import {
  type IAddAccount,
  type IAuthentication
} from '@/domain/interfaces/driving/usecases'
import {
  ok,
  forbidden,
  badRequest,
  serverError
} from '@/application/presentation/helpers'
import {
  type IController,
  type IValidation,
  type IHTTPRequest,
  type IHTTPResponse
} from '@/application/presentation/ports'
import { EmailInUse } from '@/application/presentation/errors'

export class SignUpController implements IController {
  constructor (
    private readonly _usecase: IAddAccount,
    private readonly _validation: IValidation,
    private readonly _authUsecase: IAuthentication
  ) { }

  async handle (request: IHTTPRequest): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { name, cpf, email, password, role } = request.body
      const account = await this._usecase.add({
        name,
        cpf,
        email,
        password,
        role
      })
      if (!account) return forbidden(new EmailInUse())
      const accessToken = await this._authUsecase.auth({ email, password })
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
