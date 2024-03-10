import env from '@/main/config/env'
import { type ILoadAccountByToken } from '@/domain/interfaces/driving/usecases'
import { LoadAccountByToken } from '@/application/usecases'
import { JwtAdapter } from '@/infrastructure/criptography'
import { AccountMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbLoadAccountByToken = (): ILoadAccountByToken => {
  const jwt = new JwtAdapter(env.JWT_SECRET)
  const repository = new AccountMongoRepository()
  return new LoadAccountByToken(jwt, repository)
}
