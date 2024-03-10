import { type IAddAccount } from '@/domain/interfaces/driving/usecases'
import { AddAccount } from '@/application/usecases'
import { BcryptAdapter } from '@/infrastructure/criptography'
import { AccountMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbAddAccount = (): IAddAccount => {
  const salt = 12
  const bcrypt = new BcryptAdapter(salt)
  const repository = new AccountMongoRepository()
  return new AddAccount(bcrypt, repository, repository)
}
