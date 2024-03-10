import { type IValidation } from '@/domain/interfaces/driving/presentation'
import { MissingField } from '@/application/presentation/errors'

export class MandatoryFieldValidation implements IValidation {
  constructor (private readonly _fields: string[]) { }
  validate (input: any): Error {
    const missingFields = this._fields.filter(field => !input[field])
    const fields = String(this._fields.join(', '))
    if (missingFields.length === this._fields.length) return new MissingField(fields)
  }
}
