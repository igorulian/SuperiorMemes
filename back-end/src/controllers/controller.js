const mongoose = require('mongoose')

const Meme = mongoose.model('Meme')
const User = mongoose.model('User')

module.exports = {

    async list(req,res){
        try{      
            const userid = req.tokenUserId
            
            const memes = await Meme.find().sort({likes: -1}).select('+alreadyRate')

            const memesDidntRateYet = []

            memes.forEach(meme => {

                if(meme.alreadyRate.includes(null)) return

                if(!meme.alreadyRate.includes(userid)){
                    meme.alreadyRate = null
                    memesDidntRateYet.push(meme)
                }
                
            });

            return res.json(memesDidntRateYet)
        }catch(err){
            console.log(err)
            return res.status(400).send({error: 'Error in list memes'})
        }
    },
    async guestList(req,res){
        try{      
            const {ratedMemes} = req.body
            
            const memes = await Meme.find().sort({likes: -1}).select('+alreadyRate')

            if(!ratedMemes || ratedMemes.length === 0)
                return res.json(memes)


            const memesDidntRateYet = []

            memes.forEach(meme => {
                var alreadyRate = false
                ratedMemes.forEach(ratedMeme => {
                    if(ratedMeme.memeid.toString() === meme._id.toString())
                        alreadyRate = true     
                })

                if(!alreadyRate)
                    memesDidntRateYet.push(meme)
            });

            return res.json(memesDidntRateYet)
        }catch(err){
            console.log(err)
            return res.status(400).send({error: 'Error in list memes'})
        }
    },
    async profileData(req,res){
        try{
            const userid = req.tokenUserId


            const user = await User.findById(userid)
            const username = user.user
            const memes = await Meme.find({publisherID: userid})

            var totallikes = 0, totaldislikes = 0, totalcomments = 0, totalmemes = memes.length

            memes.forEach(meme => {
                const {likes, dislikes} = meme

                totallikes += likes
                totaldislikes += dislikes
                
            });

            const response =  {
                username,
                totalmemes,
                totallikes,
                totaldislikes,
                totalcomments
            }

            return res.json(response)
        }catch(err){
            console.log(err)
            return res.status(400).send({error: 'Error in get profile data'})
        }
    },
    async listLikedMemes(req,res){ // acho que ñ é mt eficiente desse jeito, mas vai por enquanto
        try{
            const userid = req.tokenUserId
            
            const user = await User.findById(userid)
            const likedMemesIDList = user.likedMemes
            
            const likedMemes = await Meme.find( { _id : { $in : likedMemesIDList } } )


            return res.json(likedMemes)
        }catch(err){
            console.log(err)
            return res.status(400).send({error: 'Error in list memes'})
        }
    },
    async show(req,res){
        try{
            const meme = await Meme.findById(req.params.id)
 
            return res.json(meme) 
        }catch{
            return res.status(400).send({error: 'Error in show memes'})
        }
    },

    async upload(req,res) {
        try{

            const user = await User.findById(req.tokenUserId)

            const meme = {
                publisherName: user.user,
                publisherID: user._id,
                imageUrl: req.body.imageUrl,
                mimetype: req.body.mimetype,
                description: req.body.description
            }

            await Meme.create(meme)

            return res.json(meme)
        
        }catch(err){
            console.log(err)
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
            const memeid = req.params.memeid 
            const rate = req.params.rate 
            const userid = req.tokenUserId

            if(!userid)
                return res.status(400).send({error: 'Error in identify userid'})

            const meme = await Meme.findById(memeid).select('+alreadyRate')

            if(!meme)
                return res.status(400).send({error: 'Error in find meme'})

            if(meme.alreadyRate.includes(userid))
                return res.status(400).send({error: 'You already rated this meme'})


            const likes = meme.likes
            const dislikes = meme.dislikes

            const newAlreadyRate = meme.alreadyRate
            newAlreadyRate.push(userid)

            var newMeme = {}

            switch (rate) {
                case '1':
                    newMeme = {
                        likes: likes + 1,
                        alreadyRate: newAlreadyRate
                    }

                    await User.findByIdAndUpdate(req.tokenUserId,{$addToSet: {likedMemes: memeid}})
                    
                    break;

                case '0':
                    newMeme = {
                        dislikes: dislikes + 1,
                        alreadyRate: newAlreadyRate
                    }
                    break;
            
                default:
                    return res.status(400).send({error: 'Invalid rate'})
            }

            await Meme.findByIdAndUpdate(memeid, newMeme, {new: true,useFindAndModify: false})
            
            return res.status(200).send({})

        }catch{
            return res.status(400).send({error: 'Error in rate meme'})
        }
    },
}