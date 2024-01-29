import { type Collection } from 'mongodb'
import { type AddAccountParams } from '@/domain/ports'
import { sign } from 'jsonwebtoken'
import request from 'supertest'
import { type Express } from 'express'
import { setupApp } from '@/main/config/app'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db/mongodb'

let app: Express
let accountCollection: Collection
const MONGO_URL = process.env.MONGO_URL || ''

const mockAddAccountParams = (): AddAccountParams => ({
  cpf: '12345678909',
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'hashed_password'
})

describe('Login Routes', () => {
  beforeAll(async () => {
    app = setupApp()
    await MongoHelper.connect(MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('GET /account/:cpf', () => {
    test('Should return 403 on account if no accessToken is provided', async () => {
      await request(app)
        .get('/api/accounts/cpf')
        .expect(403)
    })

    test('Should return 200 on load account with accessToken', async () => {
      const reponse = await accountCollection.insertOne({
        name: 'Gabriel',
        email: 'gabriel.rodrigues@gmail.com',
        cpf: '12345678909',
        password: 123,
        role: 'admin'
      })
      const id = reponse.insertedId
      const accessToken = sign({ id }, env.JWT_SECRET)
      await accountCollection.updateOne({
        _id: id
      }, {
        $set: {
          accessToken
        }
      })
      await accountCollection.insertOne(mockAddAccountParams())
      await request(app)
        .get('/api/accounts/12345678909')
        .set('authorization', `Bearer ${accessToken}`)
        .expect(200)
    })
  })
})
