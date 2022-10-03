const express = require('express')
const cors = require('cors')
const user = require('./routes/user')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



//app.use('/', player)
app.use('/', user)


module.exports = {app}