import { type LoadProductByCategory } from '@/domain/usecases'
import {
  ok,
  notFound,
  serverError
} from '@/presentation/helpers'
import {
  type Controller,
  type HttpResponse
} from '@/presentation/protocols'

export class LoadProductByCategoryController implements Controller {
  constructor (private readonly loadProductByCategory: LoadProductByCategory) { }
  async handle (request: any): Promise<HttpResponse> {
    try {
      const { id: category } = request.params
      const product = await this.loadProductByCategory.loadByCategory(category)
      if (!product) return notFound()
      return ok(product)
    } catch (error) {
      return serverError(error)
    }
  }
}