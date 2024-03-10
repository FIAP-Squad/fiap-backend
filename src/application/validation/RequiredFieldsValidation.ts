import { type IValidation } from '@/domain/interfaces/driving/presentation'
import { MissingParam } from '@/application/presentation/errors'

export class RequiredFieldsValidation implements IValidation {
  constructor (private readonly _field: string) { }
  validate (input: any): Error {
    if (!input[this._field]) return new MissingParam(this._field)
  }
}
