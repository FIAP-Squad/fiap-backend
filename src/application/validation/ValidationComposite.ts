import { type IValidation } from '@/application/presentation/ports'

export class ValidationComposite implements IValidation {
  constructor (private readonly _validations: IValidation[]) { }
  validate (input: any): Error {
    for (const validation of this._validations) {
      const error = validation.validate(input)
      if (error) return error
    }
  }
}
