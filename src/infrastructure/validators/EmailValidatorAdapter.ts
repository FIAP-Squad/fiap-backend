import { type IEmailValidator } from '@/domain/ports/driven/validators'
import validator from 'validator'

export class EmailValidatorAdapter implements IEmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
