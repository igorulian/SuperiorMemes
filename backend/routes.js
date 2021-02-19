const express = require('express')

const routes = express.Router()

const Controller = require('./controller')

routes.get('/list', Controller.list)
routes.get('/show/:id', Controller.show)
routes.post('/upload', Controller.upload)


module.exports = routes