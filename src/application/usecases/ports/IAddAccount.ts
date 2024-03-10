import { type Account } from '@/domain/types'

export type AddAccountParams = Omit<Account, 'id'>

export interface IAddAccount {
  add: (params: AddAccountParams) => Promise<Account>
}
