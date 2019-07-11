var mongoose = require('mongoose');
var passportLocalMongoose =require('passport-local-mongoose');
var Schema = mongoose.Schema;

let vehicle_typeSchema = new Schema({
    type_name: {
        type:String,
        required:true

    },
    
}, { timestamps: true});

vehicle_type.plugin(passportLocalMongoose);

module.exports = mongoose.model('vehicletype', vehicle_typeSchema);
