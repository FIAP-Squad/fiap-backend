import { type Order } from '@/domain/models'
import {
  type AddOrderDetailsParams,
  type AddOrderItemParams,
  type AddOrderParams
} from '@/domain/usecases'
import { type AddOrderRepository } from '@/data/protocols'
import { MongoHelper } from '@/infra/db'

export class OrderMongoRepository implements AddOrderRepository {
  async addOrderTransaction (params: AddOrderParams): Promise<Order> {
    const { products, ...order } = params
    await this.addOrder(order)
    return await Promise.resolve(null)
  }

  async addOrder (params: AddOrderDetailsParams): Promise<string> {
    const orderCollection = MongoHelper.getCollection('orders')
    await orderCollection.insertOne(params)
    return await Promise.resolve(null)
  }

  async addOrderItem (params: AddOrderItemParams): Promise<Order> {
    const orderItemCollection = MongoHelper.getCollection('orderItems')
    await orderItemCollection.insertOne(params)
    return await Promise.resolve(null)
  }
}
