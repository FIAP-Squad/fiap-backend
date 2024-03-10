import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { PaymentNotificationController } from '@/application/presentation/controllers'
import { type IController } from '@/application/presentation/ports'

export const makePaymentNotificationController = (): IController => {
  const controller = new PaymentNotificationController()
  return makeLogControllerDecorator(controller)
}
