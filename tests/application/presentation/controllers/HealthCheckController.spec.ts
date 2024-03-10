import { ok } from '@/application/presentation/helpers'
import { HealthCheckController } from '@/application/presentation/controllers'

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
