const internalServerError = (response, error) => {
  const data = {
    status: 500,
    error: error
  }

  return response.status(500).json(data)
}

module.exports = internalServerError
