const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


const memeSchema = new mongoose.Schema({
    publisherName:{
        type: String,
        required: true
    },
    publisherID:{
        type: String,
        required: true
    },
    imageUrl:{
        type:String,
        required: true,
        default: ''
    },
    description:{
        type:String,
        default: ''
    },
    likes:{
        type:Number,
        default: 0,
    },
    dislikes:{
        type:Number,
        default: 0
    },
    alreadyRate:{
        type: [String],
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

memeSchema.plugin(mongoosePaginate)

mongoose.model('Meme', memeSchema)