const eventService = require("../service/eventService");
const util = require('../util/responseFormat');

exports.create = async (req, res)  => {
    try {
      let eventData = req.body;
      let data = await eventService.create(eventData);
      if(!data) res.status(409).send(util.errorResponse("", "error", "no se pudo crear el recurso"));
      res.status(201).send(util.succesResponse("createEvent", "success", data));  
    } catch (error) {
      res.status(500).send(error);
    }
  };

  exports.update = async (req, res)  => {
    try {
      let eventData = req.body;
      let data = await eventService.update(eventData);
      if(!data) res.status(409).send(util.errorResponse("", "error", "no se pudo actualizar el recurso"));
      res.status(204).send(util.succesResponse("updateEvent", "success", data));  
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.list = async (req, res) => {
      try {
          const listEvents = await eventService.list()
          res.status(200).json(util.succesResponse("listEvents", "success", listEvents));
      } catch (error) {
          res.status(500).json(error);
      }
  }