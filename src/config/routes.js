const middleware = require('./middleware/tokenValidator');
const authController = require('../controller/authController');
const userController = require('../controller/userController');
const eventController = require('../controller/eventController')
const locationController = require('../controller/locationController')

module.exports = (app) => {

    app.get('/', (req, res) => {res.send('nemesis');});

    //General paths
    app.post('/auth', authController.auth);
    app.post('/validate', middleware.validateAdmToken , (req, res) => {res.status(201).send({status: true, msg: "success"})});
    
    //Super user Paths
    app.post('/console/createUser', middleware.validateAdmToken , userController.create);
    app.get('/console/listUsers', middleware.validateAdmToken, userController.list);

    //Crear y listar eventos
    app.post('/console/createEvent', middleware.validateAdmToken, eventController.create);
    app.get('/console/listEvents', middleware.validateAdmToken, eventController.list)

    //Crear y listar ubicaciones
    app.post('/console/createLocation', middleware.validateAdmToken, locationController.create);
    app.get('/console/listLocations', middleware.validateAdmToken, locationController.list)

    //Crear y listar locales

    //Crear y listar acreditadores

    //Crear y listar tipos de entrada

    //almacenar banner => retorna base64 del mismo





    /*
    app.get('/listEvents', eventos.list);
    
    app.get('/listarClientesByEvent{id}', validateToken, eventos.enrrolledList);
    app.delete('//deleteUser{:id}', validateToken, user.delete);
    app.put('/updateUser{:id}', validateToken, user.update) */

}