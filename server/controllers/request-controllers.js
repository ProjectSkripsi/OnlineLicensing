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
            dateAktaPengesahanR: req.body.dateAktaPengesahanR,
            institutional: req.body.institutional,
            mainBusiness: req.body.mainBusiness,
            mainService: req.body.mainService
        })
        .then(response =>{
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
        .sort([['updatedAt', 'descending']])
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
            statusApplication: 'Baru'
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
            statusApplication: 'Proses'
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

    addAkta: (req, res) =>{
        Request.findByIdAndUpdate({
            _id: req.params.id,
        },{
            akta: req.body.akta
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    allOnProcces: (req, res) =>{
        Request.find({
            statusApplication: 'Proses'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteRequest: (req, res) =>{
        Request.deleteOne({
            _id: req.params.id
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    editRequest:(req, res) =>{
        Request.updateOne({
            _id: req.params.id,
        },{
            nameApplication: req.body.nameApplication,
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
            mainService: req.body.mainService,
            statusApplication: 'Baru'
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            console.log(`server`, err);
            
            res.status(500).json(err)
        })
    },

    allDone: (req, res) =>{
        Request.find({
            statusApplication: 'Selesai'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    MyDoneRequest: (req, res) =>{
        Request.find({
            userId: req.decoded.id,
            statusApplication: 'Selesai'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    allNewRequest: (req, res)=>{
        Request.find({
            statusApplication: 'Baru'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    myIncorrect: (req, res)=>{
        Request.find({
            userId: req.decoded.id,
            statusApplication: 'Butuh Perbaikan'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    myReject: (req, res)=>{
        Request.find({
            userId: req.decoded.id,
            statusApplication: 'Di Tolak'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    allIncorrect:(req, res) =>{
        Request.find({
            statusApplication: 'Butuh Perbaikan'
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    getOneReq: (req, res) =>{
        Request.findById({
            _id: req.params.id
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }

}