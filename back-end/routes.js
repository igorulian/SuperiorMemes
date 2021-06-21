const express = require('express')

const multer = require('multer')
const multerConfig = require('./src/config/multer')

const routes = express.Router()


const authMiddleware = require('./src/middlewares/auth')

const Controller = require('./src/controllers/controller')
const AuthController = require('./src/controllers/authController')


routes.post('/register', AuthController.register)
routes.post('/login', AuthController.login)
routes.post('/guest/list', Controller.guestList)

routes.use(authMiddleware)

routes.get('/list/liked', Controller.listLikedMemes)
routes.get('/list', Controller.list)
routes.get('/show/:id', Controller.show)
routes.get('/profile', Controller.profileData)
routes.post('/upload/image',multer(multerConfig).single('file'), Controller.uploadImage)
routes.post('/upload', Controller.upload)
routes.post('/rate/:memeid/:rate', Controller.rate)



module.exports = routes