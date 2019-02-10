const express = require('express')
const router = express.Router()
const upload = require('../helpers/picture')
const {isLogin} = require('../middlewares/auth')
const {addRequest, test, getRequest, myRequest, newRequest, addKtp, onRequest, addNPWP, addSpkbu, addSIUP, addFoto} = require('../controllers/request-controllers')

router.post('/', isLogin, addRequest)
router.get('/getRequest', getRequest)
router.get('/myRequest', isLogin, myRequest)
router.get('/newRequest', isLogin, newRequest)
router.get('/onRequest', isLogin, onRequest)
router.patch('/ktp/:id', addKtp)
router.patch('/npwp/:id', addNPWP)
router.patch('/spkbu/:id', addSpkbu)
router.patch('/siup/:id', addSIUP)
router.patch('/foto/:id', addFoto)


router.post('/upload',
    upload.multer.single('image'), 
    upload.sendUploadToGCS,
    (req, res) => {
        res.send({
        status: 200,
        message: 'Your file is successfully uploaded',
        link: req.file.cloudStoragePublicUrl
    })
})
router.post('/test', upload.multer.single('image'), upload.sendUploadToGCS, test)


module.exports = router