import { type Account } from '@/domain/entities'
import { type ILoadAccountByCPF } from '@/domain/ports/driving/services'
import { type ILoadAccountByCPFRepository } from '@/domain/ports/driven'

export class LoadACcountByCPF implements ILoadAccountByCPF {
  constructor (private readonly _repository: ILoadAccountByCPFRepository) { }
  async loadByCpf (cpf: string): Promise<Account> {
    return await this._repository.loadByCpf(cpf)
  }
}
