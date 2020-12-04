const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const modelNames = fs
.readdirSync(__dirname)
modelNames.map((name)=>{
require('./'+name)
})