var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var bookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    bookingDate: {
        type: String,
        required: true
    },
    bookingTime: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
       // required: true
            }
    
}, {
        timestamps: true
    });

var Bookings = mongoose.model('Booking', bookingSchema);
module.exports = Bookings;