const moongose = require('mongoose')
const Schema = moongose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, `Please input your first name`]
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
    request: {
        type: Schema.Types.ObjectId,
        ref: 'Request'
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