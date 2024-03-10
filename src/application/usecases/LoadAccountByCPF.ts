import { type Account } from '@/domain/types'
import { type ILoadAccountByCPF } from '@/application/usecases/ports'
import { type ILoadAccountByCPFRepository } from '@/infrastructure/ports'

export class LoadACcountByCPF implements ILoadAccountByCPF {
  constructor (private readonly _repository: ILoadAccountByCPFRepository) { }
  async loadByCpf (cpf: string): Promise<Account> {
    return await this._repository.loadByCpf(cpf)
  }
}
