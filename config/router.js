const express = require('express')
const router = express.Router()
const tweetController = require('../app/controllers/tweetController')

router.get('/:name', tweetController.show)

module.exports = router