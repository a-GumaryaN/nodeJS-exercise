//declare express module
const router=require('express').Router();

//declare path module
const path=require('path');

//declare client controll module
const controller = require(path.join(__dirname, '../controllers', 'client-controll'));


//-----------------------------client-login-declaration-part-----------------------------

//declare login route as get methode
router.get('/login', controller.login);

//declare login route as get methode
router.post('/login', controller.loginCheck);


//-----------------------------client-register-declaration-part-----------------------------

//declare register route as get methode
router.get('/register', controller.register);

//declare registerCheck route as get methode
router.post('/register', controller.registerCheck);

//declare welcome route as get methode
router.get('/welcome', controller.welcome);

//declare reset password route as get methode
router.get('/reset-password', controller.resetPassword);


//-----------------------------client-profile-declaration-part-----------------------------

//declare profile password route as get methode
router.get('/profile', controller.profile);

//declare profileAdditionalInfo route as get methode
router.get('/profile-additional-info', controller.profileAdditionalInfo);



//export client router module
module.exports = router;