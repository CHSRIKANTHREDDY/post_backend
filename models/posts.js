const mongoose = require('mongoose')
let Schema = mongoose.Schema
var postSchema = new Schema({
    post:{
        type:String,
        trim:true,
        default:''
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required:true
    },
    commentId: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments',
        required:false
    }],
})

module.exports = mongoose.model('Posts',postSchema)