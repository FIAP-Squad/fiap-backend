import { type IAuthentication, type AuthenticationParams } from '@/domain/interfaces/driving/services'
import {
  type IHashComparer,
  type ILoadAccountByEmailRepository,
  type IEncrypter,
  type IUpdateAccessTokenRepository
} from '@/domain/interfaces/driven'

export class Authentication implements IAuthentication {
  constructor (
    private readonly _loadRepository: ILoadAccountByEmailRepository,
    private readonly _hashComparer: IHashComparer,
    private readonly _encrypter: IEncrypter,
    private readonly _updateRepository: IUpdateAccessTokenRepository
  ) { }

  async auth (params: AuthenticationParams): Promise<string> {
    const account = await this._loadRepository.loadByEmail(params.email)
    if (account) {
      const isValid = await this._hashComparer.compare(params.password, account.password)
      if (isValid) {
        const accessToken = await this._encrypter.encrypt(account.id)
        await this._updateRepository.updateAccessToken(account.id, accessToken)
        return accessToken
      }
    }
    return null
  }
}
