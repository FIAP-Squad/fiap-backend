import {
  type AddOrderItemParams,
  type AddOrderDetailsParams,
  type AddOrderParams
} from '@/domain/usecases'
import { MongoHelper, OrderMongoRepository } from '@/infra/db'
import { ObjectId, type Collection } from 'mongodb'

const mockSut = (): OrderMongoRepository => new OrderMongoRepository()

const mockAddOrderParams = (): AddOrderParams => ({
  customer: 'any_customer',
  products: [
    {
      id: '65aa013deca75aaae89c3a1b',
      totalItems: 2,
      unitPrice: 2000,
      amount: 4000
    },
    {
      id: '65aa013deca75aaae89c3a1c',
      totalItems: 3,
      unitPrice: 6000,
      amount: 6000
    }
  ],
  status: 'any_status',
  createdAt: new Date(),
  updatedAt: new Date(),
  amount: 4000
})

const mockOrderItemParams = (): AddOrderItemParams => ({
  orderId: new ObjectId('65aa013deca75aaae89c3a1c'),
  id: '65aa013deca75aaae89c3a1c',
  totalItems: 3,
  unitPrice: 6000,
  amount: 6000
})

const mockAddOrderDetailsParams = (): AddOrderDetailsParams => ({
  customer: 'any_customer',
  status: 'any_status',
  createdAt: new Date(),
  updatedAt: new Date(),
  amount: 4000
})

let orderCollection: Collection
let orderItemsCollection: Collection
const MONGO_URL = process.env.MONGO_URL || ''

describe('OrderRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    orderCollection = MongoHelper.getCollection('orders')
    orderItemsCollection = MongoHelper.getCollection('orderItems')
    await orderCollection.deleteMany({})
  })

  test('Should create an order on success', async () => {
    const sut = mockSut()
    await sut.addOrderTransaction(mockAddOrderParams())
    const order = await orderCollection.findOne({ customer: 'any_customer' })
    expect(order).toBeTruthy()
  })

  test('Should create an orderItem on transaction success', async () => {
    const sut = mockSut()
    await sut.addOrderTransaction(mockAddOrderParams())
    const insertedTotalItems = await orderItemsCollection.findOne({ totalItems: 2 })
    const insertedUnitPrice = await orderItemsCollection.findOne({ unitPrice: 6000 })
    expect(insertedTotalItems).toBeTruthy()
    expect(insertedUnitPrice).toBeTruthy()
  })

  test('Should create an orderItem on success', async () => {
    const sut = mockSut()
    await sut.addOrderItem(mockOrderItemParams())
    const order = await orderItemsCollection.findOne({ orderId: new ObjectId('65aa013deca75aaae89c3a1c') })
    expect(order).toBeTruthy()
  })

  test('Should create an order on success', async () => {
    const sut = mockSut()
    await sut.addOrder(mockAddOrderDetailsParams())
    const order = await orderCollection.findOne({ customer: 'any_customer' })
    expect(order).toBeTruthy()
  })
})