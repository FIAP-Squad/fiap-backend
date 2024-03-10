import { type IHasher, type IHashComparer } from '@/domain/ports/driven'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements IHasher, IHashComparer {
  constructor (private readonly _salt: number) { }
  async hash (value: string): Promise<string> {
    return await bcrypt.hash(value, this._salt)
  }

  async compare (value: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(value, hash)
  }
}
