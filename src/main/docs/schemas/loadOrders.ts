export const loadOrders = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    amount: { type: 'number' },
    createdAt: { type: 'number' },
    status: { type: 'string' },
    payment: { type: 'string' },
    products: {
      type: 'array',
      items: {
        $ref: '#/schemas/item'
      }
    }
  }
}
