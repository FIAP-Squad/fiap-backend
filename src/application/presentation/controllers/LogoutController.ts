import { type ILogout } from '@/domain/ports/driving/services'
import { type IHTTPResponse, type IController, type IValidation } from '@/domain/ports/driving/presentation'
import { badRequest, noContent, serverError } from '@/application/presentation/helpers'

export class LogoutController implements IController {
  constructor (
    private readonly _validation: IValidation,
    private readonly _repository: ILogout
  ) { }

  async handle (request: any): Promise<IHTTPResponse> {
    try {
      const error = this._validation.validate(request.body)
      if (error) return badRequest(error)
      const { email } = request.body
      await this._repository.logout(email)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
