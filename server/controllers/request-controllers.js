const Request = require('../models/Request')
const Test = require('../models/Test')

module.exports = {
    addRequest: (req, res) =>{
        console.log(req.decoded.id);
        
        Request.create({
            nameApplication: req.body.nameApplication,
            userId: req.decoded.id,
            addressApplication: req.body.addressApplication,
            birthPlace: req.body.birthPlace,
            birthDate: req.body.birthDate,
            contactApplication: req.body.contactApplication,
            identityNumber: req.body.identityNumber,
            companyName: req.body.companyName,
            companyAddress: req.body.companyAddress,
            companyContact: req.body.companyContact,
            province: req.body.province,
            city: req.body.city,
            district: req.body.district,
            village: req.body.village,
            postalCode: req.body.postalCode,
            noAktaPendirian: req.body.noAktaPendirian,
            dateAktaPendirian: req.body.dateAktaPendirian,
            dateAktaPengesahan: req.body.dateAktaPengesahan,
            noAktaPerubahan: req.body.noAktaPerubahan,
            dateAktaPerubahan: req.body.dateAktaPerubahan,
            dateAktaPengesahan: req.body.dateAktaPengesahan,
            institutional: req.body.institutional,
            mainBusiness: req.body.mainBusiness,
        })
        .then(response =>{
            console.log(`iniiii responcon`);
            
            res.status(201).json({
                msg: `Succesfully created`,
                data: response
            })
        })
        .catch(err =>{
            res.status(500).json({
                msg: `error created`,
                err: err
            })
        })
    },

    test: (req, res) =>{
        Test.create({
            name: req.body.name,
            picture: req.body.picture
        })
        .then(resp =>{
            res.status(201).json(resp)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    getRequest: (req, res) =>{
        Request.find({})
        .populate('userId')
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    myRequest: (req, res) =>{
        Request.find({
            userId: req.decoded.id
        })
        // .populate
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    newRequest: (req, res) =>{
        Request.find({
            userId: req.decoded.id,
            statusApplication: 'new'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    onRequest: (req, res) =>{
        Request.find({
            userId: req.decoded.id,
            statusApplication: 'On Procces'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    addKtp: (req, res) =>{
        console.log(req.body);
        Request.findByIdAndUpdate({
            _id: req.params.id,
        },{
            ktp: req.body.ktp
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    addNPWP: (req, res) =>{
        Request.findByIdAndUpdate({
            _id: req.params.id,
        },{
            npwp: req.body.npwp
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    addSpkbu: (req, res) =>{
        Request.findByIdAndUpdate({
            _id: req.params.id,
        },{
            spkbu: req.body.spkbu
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    addSIUP: (req, res) =>{
        Request.findByIdAndUpdate({
            _id: req.params.id,
        },{
            siup: req.body.siup
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    addFoto: (req, res) =>{
        Request.findByIdAndUpdate({
            _id: req.params.id,
        },{
            foto: req.body.foto
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

}