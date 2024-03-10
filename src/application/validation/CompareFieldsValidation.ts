import { InvalidParam } from '@/application/presentation/errors'
import { type IValidation } from '@/domain/interfaces/driving/presentation'

export class CompareFieldsValidation implements IValidation {
  constructor (
    private readonly _field: string,
    private readonly _fieldToCompare: string
  ) { }

  validate (input: any): Error {
    if (input[this._field] !== input[this._fieldToCompare]) return new InvalidParam(this._fieldToCompare)
  }
}
