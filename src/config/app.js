const express = require('express')
const env = require('./env')
const cors = require('./cors')
const bodyParser = require('./body-parser')
const authenticationRoutes = require('../routes/authentication')
const paymentRoutes = require('../routes/payment')

const app = express()

app.use(cors)

app.use(bodyParser)

app.use(`${env.baseUrl}/authentication`, authenticationRoutes)

app.use(`${env.baseUrl}/authentication`, paymentRoutes)

module.exports = app
