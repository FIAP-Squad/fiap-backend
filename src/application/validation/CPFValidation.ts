import { InvalidParam } from '@/application/presentation/errors'
import { type IValidation } from '@/application/presentation/ports'

export class CPFValidation implements IValidation {
  constructor (private readonly _field: string) { }
  validate (input: any): Error {
    const errors: string[] = []
    if (typeof input[this._field] !== 'string') {
      errors.push('Invalid input type')
    } else {
      input[this._field] = input[this._field].replace(/[\s.-]*/g, '')

      if (
        !input[this._field] ||
        input[this._field].length !== 11 ||
        /^(.)\1*$/.test(input[this._field]) ||
        [
          '00000000000',
          '11111111111',
          '22222222222',
          '33333333333',
          '44444444444',
          '55555555555',
          '66666666666',
          '77777777777',
          '88888888888',
          '99999999999'
        ].includes(input[this._field])
      ) {
        errors.push('Invalid CPF format')
      }

      let sum = 0
      let rest: number

      for (let i = 1; i <= 9; i++) { sum += parseInt(input[this._field].substring(i - 1, i), 10) * (11 - i) }

      rest = (sum * 10) % 11
      if (rest === 10 || rest === 11) rest = 0
      if (rest !== parseInt(input[this._field].substring(9, 10), 10)) errors.push('Invalid CPF')

      sum = 0
      for (let i = 1; i <= 10; i++) { sum += parseInt(input[this._field].substring(i - 1, i), 10) * (12 - i) }

      rest = (sum * 10) % 11
      if (rest === 10 || rest === 11) rest = 0
      if (rest !== parseInt(input[this._field].substring(10, 11), 10)) errors.push('Invalid CPF')
    }
    if (errors.length) return new InvalidParam(this._field)
  }
}
