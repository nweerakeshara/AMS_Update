const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
    pname:{
        type:String
    },
    bname: {
        type:String
    },
    nic:{
        type:Number
    }
}, {
    collection:'business'
});
module.exports = mongoose.model('Business', Business);