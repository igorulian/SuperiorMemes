require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// const server = require('http').createServer(app)

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(`${process.env.MONGO_CONNECT_LINK}`,{ useUnifiedTopology: true })   // <-- localhost


requireDir('./src/models')

app.use('/api', require('./routes'))

app.listen(3002) // api