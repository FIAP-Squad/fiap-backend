import { type Account } from '@/domain/types'

export interface ILoadAccountByCPF {
  loadByCpf: (cpf: string) => Promise<Account>
}
