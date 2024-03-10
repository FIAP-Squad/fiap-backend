import { type Router } from 'express'
import { adaptRoute } from '@/main/adapters'
import { makeHealthCheckController } from '@/main/factories/controllers'

export default (router: Router): void => {
  router.post('/health', adaptRoute(makeHealthCheckController()))
}
