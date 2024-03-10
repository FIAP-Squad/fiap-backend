import { type Account } from '@/domain/types'

export interface ILoadAccountByToken {
  load: (accessToken: string, role?: string) => Promise<Account>
}
