const success = require('../../helpers/success')
const internalServerError = require('../../helpers/internal-server-error')

class Authentication {
  async login(request, response, next) {
    try {
      const { password, email } = request.body

      return success(response, { email, password })
    } catch (error) {
      internalServerError(response, error)
      next(error)
    }
  }
}

module.exports = new Authentication()
