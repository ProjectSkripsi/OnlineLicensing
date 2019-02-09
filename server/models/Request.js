const moongose = require('mongoose')
const Schema = moongose.Schema

const requestSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    nameApplication: String,
    addressApplication: String,
    birthPlace: String,
    birthDate: Date,
    contactApplication: String,
    identityNumber: String,
    companyName: String,
    companyAddress: String,
    companyContact: String,
    province: String,
    city: String,
    district: String,
    village: String,
    postalCode: Number,
    noAktaPendirian: String,
    dateAktaPendirian: Date,
    dateAktaPengesahan: Date,
    noAktaPerubahan: String,
    dateAktaPerubahan: Date,
    dateAktaPengesahanR: Date,
    institutional: String,
    mainBusiness: String,
    mainService: String,
    ktp: String,
    npwp: String,
    siup: String,
    spkbu: String,
    foto: String,
    statusApplication: {
        type: String,
        default: 'new'
    },
    deleteAt: {
        type: Date,
        default: null
    }
},{
    timestamps: true
})

const Request = moongose.model('Request', requestSchema);
module.exports = Request