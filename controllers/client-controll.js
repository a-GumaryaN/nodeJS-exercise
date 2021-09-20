//declare path module
const path = require('path')

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
    if(true){

    }else{

    }
}


//declare register methode
exports.resetPassword = (req, res) => {
    res.render(path.join(__dirname, "../public", "views", "passwordChange.ejs"));
}