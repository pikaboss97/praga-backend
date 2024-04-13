require("dotenv").config();
const eventModel = require("../model/event");

exports.create = async function (eventData) {
  try {
    //let eventExists = await eventModel.findOne({userId:userData.dni })
    //if (eventExists) return {msg:"EventExists", data: eventExists.eventId};
    let event = {
        eventId: eventData.locationId+eventData.placeId+eventData.date,
        eventName: eventData.name,
        eventDate: new Date(eventData.date),
        eventHour: eventData.hour,
        eventlocationId: eventData.locationId,
        eventPlaceId: eventData.placeId,
        eventAccreditorId: eventData.accreditorId,
        ticketTypes: eventData.tickets,
        eventBanner: eventData.banner,
    }
    let saved = await eventModel.create(event);
    console.log("evento creado con id: ", event.eventId);
    return saved;
  } catch (error) {
    console.log("error al crear el evento con id: ", eventData.name);
    console.log(error);
    return error;
  }
};
exports.update = async function (eventData) {
    try {
      let event = {
          eventId: eventData.eventId,
          eventName: eventData.name,
          eventDate: new Date(eventData.date),
          eventlocationId: eventData.locationId,
          eventPlaceId: eventData.placeId,
          eventAccreditorId: eventData.accreditorId,
          ticketTypes: eventData.tickets,
          eventBanner: eventData.banner,
      }
      let saved = await eventModel.findByIdAndUpdate(eventData._id,event);
      console.log("evento actualizado con id: ", eventData.id);
      return saved;
    } catch (error) {
      console.log("error al actualizar el evento con id: ", eventData.id);
      console.log(error);
      return error;
    }
  };

exports.list = async () =>{
    try {
      let events = await eventModel.find({status:1});
      return events;
    } catch (error) {
      console.log("error al listar eventos", error)
    }
  }