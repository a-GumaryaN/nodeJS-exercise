//-----------------------------modules-declaration-part-----------------------------
//declare path module for routing
const path = require('path')

//declare xss module to prevent XSS attacs
const xss = require("../modules/xss");

//declare mongodb custome module
const mongodb = require(path.join(__dirname, "../modules", "mongodb"));

//declare alias for console.log
const log = console.log;

//declare dependencies url and constance names
const url = "mongodb://localhost:27017/",
    dbname = 'nodejsExercise';


//-----------------------------methodes-declaration-part-----------------------------

//-----------------------------general-methodes-declaration-part-----------------------------

//declare home methode
exports.home = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "index.ejs"), {});
}

//declare singleProduct methode
exports.singleProduct = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "single-product.ejs"));
}