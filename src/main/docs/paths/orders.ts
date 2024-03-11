export const orders = {
  get: {
    security: [{
      bearerAuth: []
    }],
    tags: ['Order'],
    summary: 'Order API',
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/loadOrders'
            }
          }
        }
      },
      403: {
        $ref: '#/components/forbidden'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
