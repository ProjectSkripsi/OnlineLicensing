const express = require('express');
const router = express.Router();
const users = require('./users')
const request = require('./request')
/* GET home page. */

router.use('/api/users', users)
router.use('/api/request', request)

module.exports = router;
