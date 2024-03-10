import { LogMongoRepository } from '@/infrastructure/repositories/mongodb'
import { LogControllerDecorator } from '@/main/decorators'
import { type IController } from '@/domain/interfaces/driving/presentation'

export const makeLogControllerDecorator = (controller: IController): IController => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
