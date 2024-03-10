import { type IHTTPResponse, type IController } from '@/application/presentation/ports'
import { ok } from '@/application/presentation/helpers'

class HealthCheckController implements IController {
  async handle (): Promise <IHTTPResponse> {
    return await Promise.resolve(ok({}))
  }
}

type SutTypes = {
  sut: HealthCheckController
}

const mockSut = (): SutTypes => {
  const sut = new HealthCheckController()
  return {
    sut
  }
}

describe('HealthCheckController', () => {
  test('Should return 200 if API is healthy', async () => {
    const { sut } = mockSut()
    const response = await sut.handle()
    expect(response).toEqual(ok({}))
  })
})
