//declare path module
const path = require('path')

const xss = require("../modules/xss");

const mongodb = require(path.join(__dirname, "../modules", "mongodb"));

const log = console.log;

const url = "mongodb://localhost:27017/",
    dbname = 'nodejsExercise';

//declare home methode
exports.home = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "index.ejs"), {

    });
}

//declare login methode
exports.login = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "login.ejs"));
}


//declare register methode
exports.register = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "register.ejs"));
}


//declare registerCheck methode
exports.registerCheck = (req, res) => {


    let phone = xss.removeTags(req.body.phone),
        password = xss.removeTags(req.body.password);

    let personObject = [{
        phone: phone,
        password: password
    }];

    mongodb.find(url, dbname, 'customers', {
            phone: phone
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




//declare register methode
exports.resetPassword = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "passwordChange.ejs"));
}