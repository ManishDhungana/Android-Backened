var mongoose = require('mongoose');
var passportLocalMongoose =require('passport-local-mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
    firstName: {
    type:String,
    required:true

    },

    lastName: {
        type:String,
        required:true
    
        },
    contact: {
            type:Number,
            required:true
        
            },

    image: {
            type:String,
            default: ''
        
            },
    admin: {
        type:Boolean,
        default:false
    }

}, { timestamps: true});


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
