import { type Item, type Order } from '@/domain/entities'
import { type ObjectId } from 'mongodb'

export type AddOrderItemParams = Item & { orderId: ObjectId }
export type AddOrderDetailsParams = Omit<Order, 'orderId' | 'products'>

export interface IAddOrder {
  add: (params: Order) => Promise<string>
}
