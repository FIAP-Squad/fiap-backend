import { type ILogout } from '@/domain/interfaces/driving/usecases'
import { Logout } from '@/application/usecases'
import { AccountMongoRepository } from '@/infrastructure/repositories'

export const makeDbLogout = (): ILogout => {
  const repository = new AccountMongoRepository()
  return new Logout(repository)
}
