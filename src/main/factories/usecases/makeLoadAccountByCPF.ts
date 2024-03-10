import { type ILoadAccountByCPF } from '@/application/usecases/ports'
import { LoadACcountByCPF } from '@/application/usecases'
import { AccountMongoRepository } from '@/infrastructure/repositories/mongodb'

export const makeDbLoadAccountByCpf = (): ILoadAccountByCPF => {
  const repository = new AccountMongoRepository()
  return new LoadACcountByCPF(repository)
}
