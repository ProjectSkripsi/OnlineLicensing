const moongose = require('mongoose')
const Schema = moongose.Schema;
const hash = require('../helpers/hash')
const nodemailer = require('nodemailer')
const Token = require('./Token')
require('dotenv').config()

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, `Please input your first name`]
    },
    lastName: {
        type: String,
        required: [true, `Please input your last name`]
    },
    email: {
        type: String,
        unique : true,
        required: [true, 'Please input email']
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'], 
        validate: {
            validator: function(v) {
                if(v.length <= 6) return false
            }
        }
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    isVerified: { 
        type: Boolean, 
        default: false 
    },
    role: { 
        type: String, 
        default: 'member'
    },
    deleteAt: {
        type: Date,
        default: null
    }
},{
    timestamps: true
})


const User = moongose.model('User', userSchema);
module.exports = User