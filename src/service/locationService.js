require("dotenv").config();
const locationModel = require("../model/location");

exports.create = async function (locationData) {
  try {
    let location = {
        locationName: locationData.name,
        locationAddress: locationData.address??"",
        description: locationData.description ?? ""
    }
    let saved = await locationModel.create(location);
    console.log("ubicación creada con id: ", saved._id);
    return saved;
  } catch (error) {
    console.log("error al crear la ubicación: ", locationData.name);
    console.log(error);
    return error;
  }
};

exports.list = async () =>{
  try {
    let locations = await locationModel.find({status:1});
    return locations;
  } catch (error) {
    console.log("error al listar ubicaciones", error)
  }
}