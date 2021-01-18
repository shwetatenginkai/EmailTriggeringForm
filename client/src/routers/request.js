const express = require('express')
const User = require('../models/user')
const {readRequest, createRequest} = require('../db/queries')


const router = new express.Router()

router.get('/users', readRequest)
router.post('/request', createRequest)

module.exports = router