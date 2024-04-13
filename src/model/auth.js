const mongoose = require('mongoose');


const AuthSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('pragaAuth', AuthSchema);