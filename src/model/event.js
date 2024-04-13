const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    location: {
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
    }
},
{
    versionKey:false,
    timestamps:true
});

module.exports = mongoose.model('pragaEvent', EventSchema);