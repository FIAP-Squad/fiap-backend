import { type ILogout } from '@/application/usecases/ports'
import { type IDeleteAccessTokenRepository } from '@/infrastructure'

export class Logout implements ILogout {
  constructor (private readonly _repository: IDeleteAccessTokenRepository) { }
  async logout (email: string): Promise<void> {
    await this._repository.deleteAccessToken(email)
  }
}
