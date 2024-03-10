import { type ILogErrorRepository } from '@/infrastructure'
import { MongoDBHelper } from '.'

export class LogMongoRepository implements ILogErrorRepository {
  async logError (stack: string): Promise<void> {
    const collection = MongoDBHelper.getCollection('errors')
    await collection.insertOne({
      data: stack,
      date: new Date()
    })
  }
}
