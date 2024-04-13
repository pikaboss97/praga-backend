const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
    eventId: {
        type: String,
        required: true,
    },
    eventName: {
        type:String,
        required:true
    },
    eventDate: {
        type: Date,
        required: true,
    },
    eventHour: {
        type: String,
    },
    eventlocationId: {
        type: String,
        required: true,
    },
    eventPlaceId: {
        type: String,
        required: true
    },
    eventAccreditorId: {
        type: String,
        required: true
    },
    ticketTypes: {
        type: Object,
        required: true, 
    },
    eventBanner: {
        type: String
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

module.exports = mongoose.model('pragaEvent', EventSchema);