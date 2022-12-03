class LoginRouter {
  route (httpRequest) {
    const { email } = httpRequest.body

    if (!email) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('', () => {
  test('should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
