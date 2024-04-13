const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    status:{
        type: Number,
        default : 1
    }
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('pragaUser', UserSchema);