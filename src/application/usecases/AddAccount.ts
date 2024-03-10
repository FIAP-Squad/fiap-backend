import { type Account } from '@/domain/entities'
import { type AddAccountParams, type IAddAccount } from '@/application/usecases/ports'
import {
  type IHasher,
  type IAddAccountRepository,
  type ILoadAccountByEmailRepository
} from '@/infrastructure'

export class AddAccount implements IAddAccount {
  constructor (
    private readonly _hasher: IHasher,
    private readonly _addRepository: IAddAccountRepository,
    private readonly _loadRepository: ILoadAccountByEmailRepository
  ) { }

  async add (params: AddAccountParams): Promise<Account> {
    const account = await this._loadRepository.loadByEmail(params.email)
    if (!account) {
      const hashedPassword = await this._hasher.hash(params.password)
      return await this._addRepository.add(Object.assign({}, params, { password: hashedPassword }))
    }
    return null
  }
}
