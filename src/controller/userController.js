const userService = require("../service/userService");
const authService = require("../service/authService");
const util = require('../util/responseFormat');

exports.create = async (req, res)  => {
  try {
    let userData = req.body;
    let data = await userService.create(userData);
    if(!data) res.status(409).json(util.errorResponse(req.url, "error", "no se pudo crear el recurso"));
    if(data.msg == "UserExist"){
      res.status(200).json(util.succesResponse(req.url, "duplicate", "El usuario " +data.data + " ya se encuentra registrado.")); 
    }else{
      const auth = await authService.register(userData);
      res.status(201).json(util.succesResponse(req.url, "success", "Usuario "+ userData.dni + " creado satisfactoriamente")); 
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.list = async (req, res) => {
    try {
        const listUsers = await userService.list()
        res.status(200).json(util.succesResponse(req.url, "success", listUsers));
    } catch (error) {
        res.status(500).json(error);
    }
}