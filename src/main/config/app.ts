import express, { type Express } from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import setupSwagger from './configSwagger'

export const setupApp = (): Express => {
  const app = express()
  setupSwagger(app)
  setupMiddlewares(app)
  setupRoutes(app)
  return app
}
