const mongoose = require('mongoose')
let Schema = mongoose.Schema
var userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        default:''
    },
    email:{
        type:String,
        trim:true,
        default:''
    },
    password:{
        type:String,
        trim:true,
        default:''
    }
})

module.exports = mongoose.model('Users',userSchema)