const express = require('express');
const router = express.Router();
const users = require('./users')
/* GET home page. */

router.use('/api/users', users)

module.exports = router;
