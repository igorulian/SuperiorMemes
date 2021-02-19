const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


const memeSchema = new mongoose.Schema({
    publisherName:{
        type: String,
        required: true
    },
    imageUrl:{
        type:String,
        required: false,
        default: ''
    },
    likes:{
        type:Number,
        required: true,
        default: 0
    },
    dislikes:{
        type:Number,
        required: true,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

memeSchema.plugin(mongoosePaginate)

mongoose.model('Meme', memeSchema)