require('dotenv').config({silent:true})
const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
require('./configs/index')
require('./routes/index')(app)
const port  = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("started", port)
})