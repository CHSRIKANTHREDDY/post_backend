const mongoose = require('mongoose')
let Schema = mongoose.Schema
var commentSchema = new Schema({
    comment:{
        type:String,
        trim:true,
        default:''
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required:true
    },
    commentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comments',
        required:false
    },
})

module.exports = mongoose.model('Comments',commentSchema)