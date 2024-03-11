import { type Router } from 'express'
import { adminAuth, auth } from '@/main/middlewares'
import { adaptRoute } from '@/main/adapters'
import { makeAddOrderController, makeUpdateOrderController, makeLoadOrdersController } from '@/main/factories/controllers'

export default (router: Router): void => {
  router.post('/orders', auth, adaptRoute(makeAddOrderController()))
  router.get('/orders', auth, adaptRoute(makeLoadOrdersController()))
  router.patch('/orders/:code', adminAuth, adaptRoute(makeUpdateOrderController()))
}
