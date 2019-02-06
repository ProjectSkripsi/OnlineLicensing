const express = require('express');
const router = express.Router();
const {signUp, signin, getUser, confirmation} = require('../controllers/user-controllers')

router.post('/signup', signUp)
router.post('/signin', signin)
router.get('/', getUser)
router.post('/confirmation/:token', confirmation)

module.exports = router;
