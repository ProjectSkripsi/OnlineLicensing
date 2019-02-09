const moongose = require('mongoose')
const Schema = moongose.Schema

const testSchema = new Schema({
    name: String,
    picture: { 
        type: String, 
        required: true 
    },
    
});

const Test = moongose.model('Test', testSchema);
module.exports = Test