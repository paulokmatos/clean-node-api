module.exports = class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized Credentials')
    this.name = 'UnauthorizedError'
  }
}
