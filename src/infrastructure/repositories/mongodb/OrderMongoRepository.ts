import { type Order } from '@/domain/entities'
import {
  type UpdateOrderParams,
  type AddOrderDetailsParams,
  type AddOrderItemParams
} from '@/domain/ports/driving/services'
import {
  type IUpdateOrderRepository,
  type IAddOrderRepository,
  type ILoadOrdersRepository,
  type OrderWithCode
} from '@/domain/ports/driven'
import { MongoDBHelper } from '@/infrastructure/repositories'
import { ObjectId } from 'mongodb'

export class OrderMongoRepository implements
  IAddOrderRepository,
  IUpdateOrderRepository,
  ILoadOrdersRepository {
  async addOrderTransaction (params: OrderWithCode): Promise<void> {
    const session = await MongoDBHelper.startTransaction()
    try {
      const { products, ...order } = params
      const insertedId = await this.addOrder(order)
      products.forEach(async product => await this.addOrderItem({ orderId: new ObjectId(insertedId), ...product }))
      await MongoDBHelper.commitTransaction(session)
    } catch (error) {
      await MongoDBHelper.abortTransaction(session)
      throw error
    }
  }

  async addOrder (params: AddOrderDetailsParams): Promise<string> {
    const collection = MongoDBHelper.getCollection('orders')
    const id = await collection.insertOne(params)
    return id.insertedId.toHexString()
  }

  async addOrderItem (params: AddOrderItemParams): Promise<void> {
    const collection = MongoDBHelper.getCollection('orderItems')
    await collection.insertOne(params)
  }

  async updateOrder (params: UpdateOrderParams): Promise<void> {
    const collection = MongoDBHelper.getCollection('orders')
    const { code, status } = params
    await collection.findOneAndUpdate({ code }, { $set: { status } })
  }

  async loadAll (filter: any): Promise<Order[]> {
    const collection = MongoDBHelper.getCollection('orders')
    const orders = await collection.aggregate([
      { $match: filter },
      {
        $lookup: {
          from: 'orderItems',
          localField: '_id',
          foreignField: 'orderId',
          as: 'items'
        }
      },
      {
        $addFields: {
          items: {
            $filter: {
              input: '$items',
              as: 'orderItem',
              cond: {
                $eq: ['$$orderItem.orderId', '$_id']
              }
            }
          }
        }
      },
      {
        $match: {
          status: {
            $nin: ['Finalizado']
          }
        }
      },
      {
        $addFields: {
          relevance: {
            $cond: {
              if: { $eq: ['$status', 'Pronto'] },
              then: 3,
              else: {
                $cond: {
                  if: { $eq: ['$status', 'Em Preparação'] },
                  then: 2,
                  else: {
                    $cond: {
                      if: { $eq: ['$status', 'Recebido'] },
                      then: 1,
                      else: 0
                    }
                  }
                }
              }
            }
          }
        }
      },
      {
        $sort: {
          relevance: -1,
          createdAt: 1
        }
      },
      {
        $project: {
          'items._id': 0,
          relevance: 0
        }
      }
    ]).toArray()

    return orders.map(orders => MongoDBHelper.map(orders))
  }
}
