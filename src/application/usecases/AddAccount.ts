import { type Account } from '@/domain/entities'
import { type AddAccountParams, type IAddAccount } from '@/domain/interfaces/driving/services'
import {
  type IHasher,
  type IAddAccountRepository,
  type ILoadAccountByEmailRepository
} from '@/domain/interfaces/driven'

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
