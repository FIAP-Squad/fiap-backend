import { type ILogout } from '@/application/usecases/ports'
import { type IHTTPResponse, type IController, type IValidation } from '@/application/presentation/ports'
import { badRequest, noContent, serverError } from '@/application/presentation/helpers'

export class LogoutController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _usecase: ILogout
  ) { }

  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { email } = request.body
      await this._usecase.logout(email)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
