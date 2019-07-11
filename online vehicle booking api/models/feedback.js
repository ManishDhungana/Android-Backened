var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = Schema ({
    email :{
        type : String,
        require: true
    },
    users:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
require: true
    },

    message :{
        type:String,
    require:true
    }

},
{
    timestamp: true

});
var feedbacks =mongoose.model('Feedback', feedbackSchema);
module.exports = feedbacks;
