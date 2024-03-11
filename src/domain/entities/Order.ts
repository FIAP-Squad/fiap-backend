export type Item = {
  id: string
  totalItems: number
  unitPrice: number
  amount: number
}

type Payment = 'Pendente' | 'Aprovado' | 'Recusado'
type Status = 'Em preparação' | 'Recebido' | 'Finalizado'

export type Order = {
  customer: string
  amount: number
  createdAt: number
  status: Status
  payment: Payment
  products: Item[]
}
