const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

const User = mongoose.model('User')


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret)
    // return jwt.sign(params, authConfig.secret, {
    //     expiresIn: 60 * 86400
    // })
}



module.exports = {
    async register(req,res){
        try{
            const {email} = req.body
            
            if(await User.findOne({email}))
                return res.status(400).send({error: 'User already exists'})
        
            const user = await User.create(req.body)

            user.password = undefined

            return res.json({
                user,
                token: generateToken({id: user.id})
            })
            
        } catch (erru){
            return res.status(400).send({error: 'Registration failed', erru})
        }
    },

    async login(req,res){
        try{
            const {password} = req.body
            const username = req.body.user

            const user = await User.findOne({username}).select('+password')

            if(!user) 
                return res.status(400).send({error: 'Usuário não encontrado'})

            if(!await bcrypt.compare(password, user.password)) // se a senha estiver errada
                return res.status(400).send({error: 'Senha Inválida'})
            
            user.password = undefined

            res.send({
                user, 
                token: generateToken({id: user.id})
            })
        }catch{
            res.status(400).send({error: 'Falha ao autenticar'})
        }
            
    },
}