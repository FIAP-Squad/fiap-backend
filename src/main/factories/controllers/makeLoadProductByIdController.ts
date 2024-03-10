import { makeDbLoadProductById } from '@/main/factories/usecases'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { type IController } from '@/application/presentation/ports'
import { LoadProductByIdController } from '@/application/presentation/controllers'

export const makeLoadProductByIdController = (): IController => {
  const controller = new LoadProductByIdController(makeDbLoadProductById())
  return makeLogControllerDecorator(controller)
}
