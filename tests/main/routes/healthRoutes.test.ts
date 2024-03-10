import request from 'supertest'
import { type Express } from 'express'
import { setupApp } from '@/main/config/app'

let app: Express

describe('Health routes', () => {
  beforeAll(async () => {
    app = setupApp()
  })

  describe('POST /health', () => {
    test('Should return 200 on API healthy', async () => {
      await request(app)
        .post('/api/health')
        .expect(200)
    })
  })
})
