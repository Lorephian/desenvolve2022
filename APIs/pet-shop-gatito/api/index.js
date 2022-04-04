const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const router = require('./routes/suppliers/')

app.use(bodyParser.json())

app.use('/api/suppliers', router)

app.listen(config.get('api.port'), () => console.log('==== API Runing ===='))
