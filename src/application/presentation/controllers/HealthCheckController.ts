import { type IHTTPResponse, type IController } from '@/application/presentation/ports'
import { ok } from '@/application/presentation/helpers'

export class HealthCheckController implements IController {
  async handle (): Promise <IHTTPResponse> {
    return ok({})
  }
}
