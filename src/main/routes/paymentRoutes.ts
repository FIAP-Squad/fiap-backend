import { type Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makePaymentNotificationController } from '@/main/factories/controllers'

export default (router: Router): void => {
  router.post('/payment-notification', adaptRoute(makePaymentNotificationController()))
}
