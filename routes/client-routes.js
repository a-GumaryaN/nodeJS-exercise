//declare express module
const router=require('express').Router();

//declare path module
const path=require('path');

//declare client controll module
const controller = require(path.join(__dirname, '../controllers', 'client-controll'));

//declare home route as get methode
router.get('/', controller.home);

//declare login route as get methode
router.get('/login', controller.login);

//declare register route as get methode
router.get('/register', controller.register);

//declare registerCheck route as get methode
router.post('/register', controller.registerCheck);

//declare reset password route as get methode
router.get('/reset-password', controller.resetPassword);

//export client router module
module.exports = router;