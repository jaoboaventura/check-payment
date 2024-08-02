const success = require('../../helpers/success')
const internalServerError = require('../../helpers/internal-server-error')

class DeletePayment {
  async delete(request, response, next) {
    try {
      return success(response)
    } catch (error) {
      internalServerError(response, error)
      next(error)
    }
  }
}

module.exports = new DeletePayment()
