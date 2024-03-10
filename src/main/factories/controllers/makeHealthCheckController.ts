import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { HealthCheckController } from '@/application/presentation/controllers'
import { type IController } from '@/application/presentation/ports'

export const makeHealthCheckController = (): IController => {
  const controller = new HealthCheckController()
  return makeLogControllerDecorator(controller)
}
