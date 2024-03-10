import { type IHTTPResponse, type IController } from '@/application/presentation/ports'
import { noContent } from '@/application/presentation/helpers'

export class PaymentNotificationController implements IController {
  async handle (): Promise<IHTTPResponse> {
    return await Promise.resolve(noContent())
  }
}
