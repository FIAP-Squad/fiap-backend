import { ObjectId } from 'mongodb'
import { MongoDBHelper } from '.'
import { type Product } from '@/domain/types'
import { type AddProductParams } from '@/application/usecases/ports'
import {
  type IAddProductRepository,
  type ILoadProductByIdRepository,
  type ILoadProductsRepository,
  type IDeleteProductRepository,
  type IUpdateProductRepository,
  type UpdateProductParams
} from '@/infrastructure/ports'

export class ProductMongoRepository implements
  IAddProductRepository,
  ILoadProductsRepository,
  ILoadProductByIdRepository,
  IDeleteProductRepository,
  IUpdateProductRepository {
  async add (params: AddProductParams): Promise<void> {
    const collection = MongoDBHelper.getCollection('products')
    await collection.insertOne(params)
  }

  async loadAll (filter: any): Promise<Product[]> {
    const collection = MongoDBHelper.getCollection('products')
    const products = await collection.find<Product>(filter).toArray()
    return products.map(product => MongoDBHelper.map(product))
  }

  async loadById (id: string): Promise<Product> {
    const collection = MongoDBHelper.getCollection('products')
    const product = collection.findOne<Product>({ _id: { $eq: new ObjectId(id) } })
    return product && MongoDBHelper.map(product)
  }

  async delete (id: string): Promise<void> {
    const collection = MongoDBHelper.getCollection('products')
    await collection.deleteOne({ _id: new ObjectId(id) })
  }

  async update (params: UpdateProductParams): Promise<void> {
    const collection = MongoDBHelper.getCollection('products')
    const { id, body } = params
    await collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...body } })
  }
}
