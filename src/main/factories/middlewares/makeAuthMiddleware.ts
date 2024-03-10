import { makeDbLoadAccountByToken } from '@/main/factories/usecases'
import { AuthMiddleware } from '@/application/presentation/middlewares'
import { type IMiddleware } from '@/application/presentation/ports'

export const makeAuthMiddleware = (role?: string): IMiddleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
