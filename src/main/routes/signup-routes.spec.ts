import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

beforeAll(async () => {
  await MongoHelper.connect(process.env.MONGO_URL)
})

afterAll(async () => {
  await MongoHelper.disconnect()
})

beforeEach(async () => {
  const accountCollection = MongoHelper.getCollection('accounts')
  await accountCollection.deleteMany({})
})

describe('SignUp Route', () => {
  it('Should return an account on success ', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'valid_name',
        email: 'valid_email',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})