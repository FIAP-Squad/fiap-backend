import { type ILogout } from '@/domain/interfaces/driving/services'
import { type IDeleteAccessTokenRepository } from '@/domain/interfaces/driven'

export class Logout implements ILogout {
  constructor (private readonly _repository: IDeleteAccessTokenRepository) { }
  async logout (email: string): Promise<void> {
    await this._repository.deleteAccessToken(email)
  }
}
