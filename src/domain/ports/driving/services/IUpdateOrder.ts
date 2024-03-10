export type UpdateOrderParams = {
  code: string
  status: string
}

export interface IUpdateOrder {
  update: (params: UpdateOrderParams) => Promise<void>
}
