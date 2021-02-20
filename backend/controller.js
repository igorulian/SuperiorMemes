const mongoose = require('mongoose')

const Meme = mongoose.model('Meme')

// const aws = require('aws-sdk')

// const s3 = new aws.S3()

module.exports = {

// Loja

    async list(req,res){
        try{
            const {page = 1} = req.query
            
            const memes = await Meme.paginate({}, {page, limit:20})

            return res.json(memes)
        }catch{
            return res.status(400).send({error: 'Error in list memes'})
        }
    },
    async show(req,res){
        try{
            const store = await Meme.findById(req.params.id)

            return res.json(store) 
        }catch{
            return res.status(400).send({error: 'Error in show memes'})
        }
    },

    async upload(req,res) {
        try{

            const meme = Meme.create(req.body)

            return res.json(req.body)
        
        }catch{
            return res.status(400).send({error: 'Error in upload meme'})
        }
    },
    async uploadImage(req,res) {
        try{
            return res.json(req.file)
        }catch{
            return res.status(400).send({error: 'Error in upload image'})
        }
    },
    async rate(req,res) {
        try{
            const ld = req.params.ld 

            const store = await Meme.findById(req.params.id)
            const likes = store.likes + 1
            const dislikes = store.dislikes + 1

            if(ld == 1){
                const newMeme = {
                    likes: likes
                }
                await Meme.findByIdAndUpdate(req.params.id, newMeme, {new: true,useFindAndModify: false})
            }else{
                const newMeme = {
                    dislikes: dislikes
                }
                await Meme.findByIdAndUpdate(req.params.id, newMeme, {new: true,useFindAndModify: false})
            }

            
            const vote = ld == 1 ? 'like' : 'dislike'
            console.log('Voted: ID: ' + req.params.id + 'vote: ' + vote )

            return res.json({OK: 'OK'})
        }catch{
            return res.status(400).send({error: 'Error in rate meme'})
        }
    },
}