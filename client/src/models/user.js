const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is invalid');
            }   
        }
    },
    company: {
        type: String,
        trim: true,
        required: true
    },
    designation:{
        type: String,
        trim: true,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true,
        trim: true
        /* validate(value){
            if(!validator.isPhone(value)){
                throw new Error('Please provide valid phone number');
            }
        } */
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
})

module.exports = User