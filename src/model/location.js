const mongoose = require('mongoose');


const LocationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true,
    },
    locationAddress: {
        type: String,
    },
    description: {
        type: String,
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

module.exports = mongoose.model('pragaLocation', LocationSchema);