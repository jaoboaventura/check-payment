const express = require('express')
const router = express.Router()
const GetPayment = require('../../controllers/payment/get-payment')
const PostPayment = require('../../controllers/payment/post-payment')
const PutPayment = require('../../controllers/payment/put-payment')
const DeletePayment = require('../../controllers/payment/delete-payment')
const CheckPayment = require('../../controllers/payment/check-payment')

router.get('/get-payment', GetPayment.get)

router.post('/post-payment', PostPayment.post)

router.put('/put/payment', PutPayment.put)

router.delete('/delete-payment', DeletePayment.delete)

router.get('/check-payment', CheckPayment.check)

module.exports = router
