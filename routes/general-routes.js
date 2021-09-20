//-----------------------------modules-declaration-part-----------------------------
//declare express module
const router = require('express').Router();

//declare path module
const path = require('path');

//declare client controll module
const controller = require(path.join(__dirname, '../controllers', 'general-routes'));



//-----------------------------methodes-declaration-part-----------------------------

//declare home route as get methode
router.get('/', controller.home);

//declare singleProduct route as get methode
router.get('/single-product', controller.singleProduct);

//export client router module
module.exports = router;