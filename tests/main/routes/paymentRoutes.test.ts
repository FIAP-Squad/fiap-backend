import request from 'supertest'
import { type Express } from 'express'
import { setupApp } from '@/main/config/app'

let app: Express

describe('payment routes', () => {
  beforeAll(async () => {
    app = setupApp()
  })

  describe('POST /payment-notification', () => {
    test('Should return 201 on payment-notification without access token', async () => {
      await request(app)
        .post('/api/payment-notification')
        .expect(201)
    })
  })
})
