const express = require('express');
const router = express.Router();
const {signUp, signin, getUser, confirmation, resendToken} = require('../controllers/user-controllers')

router.post('/signup', signUp)
router.post('/signin', signin)
router.get('/', getUser)
router.post('/confirmation/:token', confirmation)
router.post('/resendConfirmation', resendToken)

module.exports = router;
