import { type AddAccountParams } from '@/application/usecases/ports'
import { type Account } from '@/domain/entities'

export interface IAddAccountRepository {
  add: (params: AddAccountParams) => Promise<Account>
}
