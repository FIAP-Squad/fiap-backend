import { type Authentication } from '@/domain/usecases'
import {
  ok,
  badRequest,
  serverError,
  unauthorized
} from '@/presentation/helpers'
import {
  type Controller,
  type Validation,
  type HttpRequest,
  type HttpResponse
} from '@/presentation/protocols'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request.body)
      if (error) return badRequest(error)
      const { email, password } = request.body
      const accessToken = await this.authentication.auth({ email, password })
      if (!accessToken) return unauthorized()
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}