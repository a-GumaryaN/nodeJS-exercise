//declare an alias for console.log
const log=console.log;


//-----------------------------modules-declaration-part-----------------------------
//declare express modile and app onject from express
const express= require('express');

//declare app object to commanding express
const app = express();

//declare path module
const path = require('path');

//declare bodyparser module to pars input post methode
const bodyparser = require('body-parser');

//declare http module to make http server
const http = require('http');

//create server object from http.Server methode to create server
const server = http.createServer(app);

//declare port
const port=process.env.port || 3000;


//-----------------------------app-pre-setting-declaration-part-----------------------------

//declare public folder for express module
app.use(express.static(path.join('public')));

//declare ejs as engine for express module
app.set({
    "view engine": "ejs"
});

//declare bodyparser to express module
app.use(bodyparser.urlencoded({
    extended: false
}));

//-----------------------------routes-declaration-part-----------------------------

//declare client routes module
const clientRoutes = require("./routes/client-routes");
//declare client routes for express module
app.use(clientRoutes);


//declare general routes module
const generalRoutes = require("./routes/general-routes");
//declare general routes for express module
app.use(generalRoutes);


//declare client routes module
const adminRoutes = require('./routes/admin-routes');
//declare client routes for express module
app.use( "/admin" , adminRoutes);

//declare 404 page
app.use("" , (req, res)=>{
res.render(path.join(__dirname , "public" , "views" , "404.ejs"));
});

//-----------------------------run-server-command-declaration-part-----------------------------

//run server by 'server' object
server.listen(port ,(err)=>{
if(err) throw err;
else log(`server is running on port ${port}`);
});


