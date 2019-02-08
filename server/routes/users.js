const express = require('express');
const router = express.Router();
const {isLogin} = require('../middlewares/auth')
const {signUp, signin, getUser, confirmation, resendToken, getOne} = require('../controllers/user-controllers')

router.post('/signup', signUp)
router.post('/signin', signin)
router.get('/', getUser)
router.post('/confirmation/', confirmation)
router.post('/resendConfirmation', resendToken)
router.get('/getOne', isLogin, getOne)

module.exports = router;
