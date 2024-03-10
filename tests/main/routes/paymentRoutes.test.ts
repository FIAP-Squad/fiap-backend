import request from 'supertest'
import { type Express } from 'express'
import { setupApp } from '@/main/config/app'

let app: Express

describe('Payment routes', () => {
  beforeAll(async () => {
    app = setupApp()
  })

  describe('POST /notification', () => {
    test('Should return 200 on notification without access token', async () => {
      await request(app)
        .post('/api/notification')
        .expect(200)
    })
  })
})
