require("dotenv").config();
const userModel = require("../model/user");

exports.create = async function (userData) {
  try {
    let userExists = await userModel.findOne({userId:userData.dni })
    if (userExists) return {msg:"UserExist", data: userExists.userId};
    let user = {
        userId: userData.dni,
        name: userData.name,
        lastName: userData.lastName,
        rol: userData.role,
        dni: userData.dni,
        birthdate: new Date(userData.birthdate),
        email: userData.email,
        phoneNumber: userData.number,
    }
    let saved = await userModel.create(user);
    console.log("usuario creado con id: ", userData.dni);
    return saved;
  } catch (error) {
    console.log("error al crear el usuario con id: ", userData.dni);
    console.log(error);
    return error;
  }
};

exports.list = async () =>{
  try {
    let users = await userModel.find({status:1});
      
    return users;
  } catch (error) {
    console.log("error al listar usuarios", error)
  }
}