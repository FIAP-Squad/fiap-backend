import { loginPath } from './paths'
import { login, loginParams, error } from './schemas'
import { badRequest, serverError, unauthorized, notFound } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'FIAP Tech Challenge API',
    description: 'FIAP Tech Challenge API',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [
    { name: 'Login' },
    { name: 'Order' }
  ],
  paths: {
    '/login': loginPath
  },
  schemas: {
    login,
    loginParams,
    error
  },
  components: {
    badRequest,
    unauthorized,
    serverError,
    notFound
  }
}
