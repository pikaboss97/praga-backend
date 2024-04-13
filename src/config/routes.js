const middleware = require('./middleware/tokenValidator');
const authController = require('../controller/authController');
const userController = require('../controller/userController')

module.exports = (app) => {

    app.get('/', (req, res) => {res.send('nemesis');});

    //Super user Paths
    app.post('/console/createUser', middleware.validateAdmToken , userController.create);
    app.get('/console/listUsers', middleware.validateAdmToken, userController.list);
    app.post('/console/createEvent', middleware.validateAdmToken, eventos.create);




    //General paths
    app.post('/auth', authController.auth);
    app.post('/validate', middleware.validateAdmToken , (req, res) => {res.status(201).send({status: true, msg: "success"})});

    /*
    app.get('/listEvents', eventos.list);
    
    app.get('/listarClientesByEvent{id}', validateToken, eventos.enrrolledList);
    app.delete('//deleteUser{:id}', validateToken, user.delete);
    app.put('/updateUser{:id}', validateToken, user.update) */

}