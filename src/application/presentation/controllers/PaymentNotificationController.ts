import { type IHTTPResponse, type IController } from '@/application/presentation/ports'
import { created } from '@/application/presentation/helpers'

export class PaymentNotificationController implements IController {
  async handle (): Promise<IHTTPResponse> {
    return await Promise.resolve(created())
  }
}
