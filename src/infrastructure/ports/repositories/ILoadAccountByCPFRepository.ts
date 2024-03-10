import { type Account } from '@/domain/types'

export interface ILoadAccountByCPFRepository {
  loadByCpf: (cpf: string) => Promise<Account>
}
