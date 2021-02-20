const express = require('express')

const multer = require('multer')
const multerConfig = require('./src/config/multer')

const routes = express.Router()

const Controller = require('./controller')

routes.get('/list', Controller.list)
routes.get('/show/:id', Controller.show)
routes.post('/upload/image',multer(multerConfig).single('file'), Controller.uploadImage)
routes.post('/upload', Controller.upload)
routes.post('/rate/:ld/:id', Controller.rate)


module.exports = routes