import { type Account } from '@/domain/types'
import { type ILoadAccountByToken } from '@/application/usecases/ports'
import { type IDecrypter, type ILoadAccountByTokenRepository } from '@/infrastructure/ports'

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
