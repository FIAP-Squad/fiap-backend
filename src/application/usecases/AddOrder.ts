import { type IAddOrder } from '@/application/usecases/ports'
import { type IAddOrderRepository } from '@/infrastructure'
import { type Order } from '@/domain/entities'

export class AddOrder implements IAddOrder {
  constructor (private readonly _repository: IAddOrderRepository) { }
  async add (params: Order): Promise<string> {
    const code = this._setOrderCode()
    const createdAt = this._setCurrentDateTime()
    await this._repository.addOrderTransaction({ code, createdAt, ...params })
    return code
  }

  private _setOrderCode (): string {
    const dateTimeNow = new Date()
    const character = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    const day = String(dateTimeNow.getDate())[0]
    const hour = String(dateTimeNow.getHours())[0]
    const minute = String(dateTimeNow.getMinutes())[0]
    const second = String(dateTimeNow.getSeconds())[0]
    const milli = String(dateTimeNow.getMilliseconds())[0]
    return `${character}${day}${hour}${minute}${second}${milli}`.toString()
  }

  private _setCurrentDateTime (): number {
    return new Date().getTime()
  }
}
