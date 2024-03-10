import { type AddAccountParams } from '@/application/usecases/ports'
import { type Account } from '@/domain/types'

export interface IAddAccountRepository {
  add: (params: AddAccountParams) => Promise<Account>
}
