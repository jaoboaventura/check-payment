const success = require('../../helpers/success')
const internalServerError = require('../../helpers/internal-server-error')

class CheckPayment {
  async check(request, response, next) {
    try {
      const { clientId } = request.params

      return success(response, { clientId })
    } catch (error) {
      internalServerError(response, error)
      next(error)
    }
  }
}

module.exports = new CheckPayment()
