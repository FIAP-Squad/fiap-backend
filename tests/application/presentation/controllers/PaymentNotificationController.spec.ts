import { noContent } from '@/application/presentation/helpers'
import { PaymentNotificationController } from '@/application/presentation/controllers'

type SutTypes = {
  sut: PaymentNotificationController
}

const mockSut = (): SutTypes => {
  const sut = new PaymentNotificationController()
  return {
    sut
  }
}

describe('PaymentNotificationController', () => {
  test('Should be ', async () => {
    const { sut } = mockSut()
    const response = await sut.handle()
    expect(response).toEqual(noContent())
  })
})
