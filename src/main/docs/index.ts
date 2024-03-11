import { loginPath } from './paths'
import { login, loginParams } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: '15s Snacks API',
    description: 'FIAP Tech Challenge Backend',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [
    { name: 'Login' }
  ],
  paths: {
    '/login': loginPath
  },
  schemas: {
    login,
    loginParams
  }
}
