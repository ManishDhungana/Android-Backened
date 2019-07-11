var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var gallerySchema = new Schema({
    image: {
        type: String,
        required: true
    }
    
}, {
        timestamps: true
    });

var Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;