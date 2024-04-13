const locationService = require("../service/locationService");
const util = require('../util/responseFormat');

exports.create = async (req, res)  => {
  try {
    let locationData = req.body;
    let data = await locationService.create(locationData);
    if(!data) res.status(409).json(util.errorResponse(req.url, "error", "no se pudo crear el recurso"));
    res.status(201).json(util.succesResponse(req.url, "success", "Ubicación "+ locationData.name + " creado satisfactoriamente")); 
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.list = async (req, res) => {
    try {
        const locationList = await locationService.list()
        res.status(200).json(util.succesResponse(req.url, "success", locationList));
    } catch (error) {
        res.status(500).json(error);
    }
}