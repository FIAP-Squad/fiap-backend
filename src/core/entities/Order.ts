export type Item = {
  id: string
  totalItems: number
  unitPrice: number
  amount: number
}

export type Order = {
  customer: string
  status: string
  createdAt: number
  amount: number
  products: Item[]
}
