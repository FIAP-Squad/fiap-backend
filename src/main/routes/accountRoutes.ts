import { type Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { adminAuth } from '@/main/middlewares'
import { makeLoadAccountByCPFController } from '@/main/factories/controllers'

export default (router: Router): void => {
  router.get('/accounts/:cpf', adminAuth, adaptRoute(makeLoadAccountByCPFController()))
}
