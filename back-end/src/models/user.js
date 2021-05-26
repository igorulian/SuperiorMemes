const mongoose = require('mongoose')
const bcrypt  = require('bcryptjs')


const userSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type:String,
        unique: true,
        require: true,
        lowercase: true,
        select: false
    },
    profilePicture:{
        type: String,
        required: false,
        default: ''
    },
    password:{
        type: String,
        select: false,
        require: true,
    },
    likedMemes:{
        type: [String],
        required: false,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})


mongoose.model('User', userSchema)