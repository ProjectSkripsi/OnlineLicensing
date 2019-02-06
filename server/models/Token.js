const moongose = require('mongoose')
const Schema = moongose.Schema

const tokenSchema = new Schema({
    _userId: { 
        type: moongose.Schema.Types.ObjectId, 
        required: true, ref: 'User' 
    },
    token: { 
        type: String, 
        required: true 
    },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

const Token = moongose.model('Token', tokenSchema);
module.exports = Token