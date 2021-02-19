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
    async rate(req,res) {
        try{

            const meme = Meme.create(req.body)

            return res.json(req.body)
        
        }catch{
            return res.status(400).send({error: 'Error in upload meme'})
        }
    },
    // async delete(req,res) {  // depois vincular a key (nome) com o id do restaurabte para poder deletar apenas se for do restaurante
    //     try{
    //         if(!(req.storeId === req.params.id))
    //         return res.status(400).send({error: 'Invalid store'}) 

    //         const imageKey = req.params.imageid
    //         // console.log('IMG: ' + imageKey)

    //         var params = {
    //             Bucket: 'upload-delivery', 
    //             Delete: { // required
    //             Objects: [ // required
    //                 {
    //                 Key: imageKey // required
    //                 }
    //             ],
    //             },
    //         };

    //         s3.deleteObjects(params, function(err, data) {
    //             if (err) console.log(err, err.stack); // an error occurred
    //             // else  console.log(data);           // successful response
    //         });

    //         return res.status(200).send('OK')
    //     }catch{
    //         return res.status(400).send({error: 'Error in delete image'})
    //     }
    // }
}