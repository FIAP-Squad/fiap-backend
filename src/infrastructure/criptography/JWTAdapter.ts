import { type IEncrypter, type IDecrypter } from '@/infrastructure/ports'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements IEncrypter, IDecrypter {
  constructor (private readonly _secret: string) { }
  async encrypt (value: string): Promise<string> {
    return jwt.sign({ id: value }, this._secret, { expiresIn: 1800 })
  }

  async decrypt (token: string): Promise<string> {
    return jwt.verify(token, this._secret) as any
  }
}
