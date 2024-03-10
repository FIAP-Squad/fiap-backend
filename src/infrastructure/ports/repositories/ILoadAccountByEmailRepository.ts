import { type Account } from '@/domain/types'

export interface ILoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<Account>
}
