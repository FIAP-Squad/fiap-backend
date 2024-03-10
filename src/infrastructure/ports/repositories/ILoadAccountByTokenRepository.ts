import { type Account } from '@/domain/types'

export interface ILoadAccountByTokenRepository {
  loadByToken: (token: string, role?: string) => Promise<Account>
}
