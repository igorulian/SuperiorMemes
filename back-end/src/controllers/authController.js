const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

const User = mongoose.model('User')
const Meme = mongoose.model('Meme')


function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret)
}


async function transferRateMemesFromLocalToUserDB(localRatedMemes,newuser) {
    try{
        const likedMemes = []

        localRatedMemes.forEach(async (meme) => {

            const memeDB = await Meme.findById(meme.memeid).select('+alreadyRate')

            if(!memeDB) return

            let {likes,dislikes,alreadyRate} = memeDB

            if(meme.rate === 1){
                likedMemes.push(meme.memeid)
                likes++
            }

            if(meme.rate === 0)
                dislikes++
            
            alreadyRate.push(newuser._id)

            await Meme.findByIdAndUpdate(meme.memeid, {alreadyRate,likes,dislikes})

        });
        

        await User.findByIdAndUpdate(newuser._id,{likedMemes})
    }catch{
        console.log('Erro ao transferir dados')
    }

}



module.exports = {
    async register(req,res){
        try{
            const {email,user,password,localRatedMemes} = req.body
            
            if(await User.findOne({email}))
                return res.status(400).send({error: 'User already exists'})
        
            const newUser = {
                user,
                email,
                password
            }

            const newCreateduser = await User.create(newUser)
            newCreateduser.password = undefined

            console.log('localRatedMemes: ' + localRatedMemes)

            if(localRatedMemes)
                await transferRateMemesFromLocalToUserDB(localRatedMemes,newCreateduser)
            

            return res.json({
                newCreateduser,
                token: generateToken({id: newCreateduser.id})
            })
            
        } catch (erru){
            return res.status(400).send({error: 'Registration failed', erru})
        }
    },

    async login(req,res){
        try{
            const {password,email} = req.body
            // const username = req.body.user

            const user = await User.findOne({email}).select('+password')

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