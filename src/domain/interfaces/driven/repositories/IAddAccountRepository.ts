import { type AddAccountParams } from '@/domain/interfaces/driving/services'
import { type Account } from '@/domain/entities'

export interface IAddAccountRepository {
  add: (params: AddAccountParams) => Promise<Account>
}
