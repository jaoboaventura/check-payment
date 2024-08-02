const success = (response, payload) => {
  const data = {
    status: 200,
    data: payload
  }

  return response.status(200).json(data)
}

module.exports = success
