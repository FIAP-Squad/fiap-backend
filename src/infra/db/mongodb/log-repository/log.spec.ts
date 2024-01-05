import { LogErrorRepository } from "../../../../data/protocols/db/log-error-repository"
import { MongoHelper } from "../helpers/mongo-helper"
import { LogMongoRepository } from "./log"

describe('Log Mongo Repository', () => {
  let errorCollection
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorCollection = MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  const makeSut = (): LogErrorRepository => {
    return new LogMongoRepository()
  }

  test('Should create an error log on success ', async () => {
    const sut = makeSut()
    await sut.logError('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})