import request from 'supertest'
import { type Express } from 'express'
import { setupApp } from '@/main/config/app'

let app: Express

describe('Cors Middleware', () => {
  beforeAll(() => {
    app = setupApp()
  })
  test('Should enable CORS ', async () => {
    app.get('/test_cors', (_, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
