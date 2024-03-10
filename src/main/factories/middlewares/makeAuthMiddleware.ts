import { makeDbLoadAccountByToken } from '@/main/factories/usecases'
import { AuthMiddleware } from '@/application/presentation/middlewares'
import { type IMiddleware } from '@/domain/ports/driving/presentation'

export const makeAuthMiddleware = (role?: string): IMiddleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
