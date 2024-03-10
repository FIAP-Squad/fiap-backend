import { makeDbDeleteProduct } from '@/main/factories/usecases/'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { type IController } from '@/domain/interfaces/driving/presentation'
import { DeleteProductController } from '@/application/presentation/controllers'

export const makeDeleteProductController = (): IController => {
  const controller = new DeleteProductController(makeDbDeleteProduct())
  return makeLogControllerDecorator(controller)
}
