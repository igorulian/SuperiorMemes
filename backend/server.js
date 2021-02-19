require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const server = require('http').createServer(app)

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


mongoose.connect('mongodb://localhost:27017/superiormemesapi',{ useUnifiedTopology: true })   // <-- localhost

// mongoose.connect('mongodb+srv://mongodelivery:mongo123@cluster0.fogjv.mongodb.net/Cluster0?retryWrites=true&w=majority',{ useUnifiedTopology: true })

//mongodb+srv://mongodelivery:<password>@cluster0.fogjv.mongodb.net/<dbname>?retryWrites=true&w=majority

requireDir('./src/models')

app.use('/api/', require('./routes'))

app.listen(3002) // api