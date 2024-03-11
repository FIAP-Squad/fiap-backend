import request from 'supertest'
import { noCache } from '@/main/middlewares'
import { setupApp } from '@/main/config/app'

const app = setupApp()

describe('No Cache Middleware', () => {
  test('Should desable cache ', async () => {
    app.get('/test_no_cache', noCache, (_, res) => {
      res.send()
    })
    await request(app)
      .get('/test_no_cache')
      .expect('cache-controle', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('pragma', 'no-cache')
      .expect('expires', '0')
      .expect('surrogate-control', 'no-store')
  })
})
