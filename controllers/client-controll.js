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

//-----------------------------client-login-part-----------------------------

//declare login methode
exports.login = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "login.ejs"));
}

//declare loginCheck methode
exports.loginCheck = (req, res) => {
    let username = xss.removeTags(req.body.username),
        password = xss.removeTags(req.body.password);

    mongodb.find(url, dbname, 'customers', {
            username: username
        })
        .then((findResult) => {
            if (findResult.length !== 0) {
                res.redirect(`http://localhost:3000/?username=${username}`);
            } else {
                userId = findResult._id;
                res.redirect('http://localhost:3000/login?result=clientNotFound');
            }
        })
        .catch((err) => {
            log(err);
        });
}

//----------------------------------client-register-part----------------------------------
//declare register methode
exports.register = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "register.ejs"));
}

//declare welcome methode
exports.welcome = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "welcome.ejs"));
}

//declare registerCheck methode
exports.registerCheck = (req, res) => {

    let username = xss.removeTags(req.body.username),
        password = xss.removeTags(req.body.password);

    let personObject = [{
        username: username,
        password: password
    }];

    mongodb.find(url, dbname, 'customers', {
            username: username
        }).then((findResult) => {

            if (findResult.length === 0) {
                mongodb.insert(url, dbname, 'customers', personObject)
                    .then((insertResult) => {
                        res.redirect('http://localhost:3000/register?result=Registered')
                    })
                    .catch((err) => {
                        res.redirect('http://localhost:3000/register?result=canNotRegistered');
                    });

            } else {
                res.redirect('http://localhost:3000/register?result=clientRegistered');
            }
        })
        .catch((err) => {
            log(err);
        });
}


//----------------------------------client-profile-part----------------------------------
//declare profileAdditionalInfo methode
exports.profileAdditionalInfo = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "profile-additional-info.ejs"));
}

//declare profileAdditionalInfo methode
exports.profile = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "profile-additional-info.ejs"));
}

//declare resetPassword methode
exports.resetPassword = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "passwordChange.ejs"));
}