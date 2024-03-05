import { type IAddOrder } from '@/core/ports/driving/services'
import { type IAddOrderRepository } from '@/core/ports/driven'
import { type Order } from '@/core/entities'

export class AddOrder implements IAddOrder {
  constructor (private readonly _repository: IAddOrderRepository) { }
  async add (params: Order): Promise<string> {
    const code = this._setOrderCode()
    await this._repository.addOrderTransaction({ ...params, code })
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
}
