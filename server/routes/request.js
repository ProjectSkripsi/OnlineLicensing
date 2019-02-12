const express = require('express')
const router = express.Router()
const upload = require('../helpers/picture')
const {isLogin} = require('../middlewares/auth')
const {addRequest, test, getRequest, myRequest, newRequest, addKtp, editRequest, allDone, MyDoneRequest,
    onRequest, addNPWP, addSpkbu, addSIUP, addFoto, allOnProcces, deleteRequest} = require('../controllers/request-controllers')

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
router.get('/allOnProcces', allOnProcces)
router.delete('/:id', deleteRequest),
router.put('/:id', editRequest)
router.get('/allDone', allDone)
router.get('/MyDoneRequest', isLogin, MyDoneRequest)


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


module.exports = router