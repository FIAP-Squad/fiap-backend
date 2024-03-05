import { type Account } from '@/core/entities'
import { type ILoadAccountByToken } from '@/core/ports/driving/services'
import { type IDecrypter, type ILoadAccountByTokenRepository } from '@/core/ports/driven'

export class LoadAccountByToken implements ILoadAccountByToken {
  constructor (
    private readonly _decrypt: IDecrypter,
    private readonly _repository: ILoadAccountByTokenRepository
  ) { }

  async load (accessToken: string, role?: string): Promise<Account> {
    let token: string
    try { token = await this._decrypt.decrypt(accessToken) } catch (error) { return null }
    if (token) {
      const account = await this._repository.loadByToken(accessToken, role)
      if (account) return account
    }
    return null
  }
}
