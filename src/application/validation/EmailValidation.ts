import { type IEmailValidator } from '@/domain/interfaces/driven/validators'
import { type IValidation } from '@/domain/interfaces/driving/presentation'
import { InvalidParam } from '@/application/presentation/errors'

export class EmailValidation implements IValidation {
  constructor (
    private readonly _field: string,
    private readonly _validator: IEmailValidator
  ) { }

  validate (input: any): Error {
    const isValid = this._validator.isValid(input[this._field])
    if (!isValid) return new InvalidParam(this._field)
  }
}
