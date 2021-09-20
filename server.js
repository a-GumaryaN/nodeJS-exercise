//declare an alias for console.log
const log=console.log;


//declare express modile and app onject from express
const express= require('express');
const app = express();


//declare path module
const path = require('path');


//declare bodyparser module to pars input post methode
const bodyparser = require('body-parser');


//declare bodyparser to express module
app.use(bodyparser.urlencoded({ extended:false }));


//declare http module to make http server
const http = require('http');


//create server object from http.Server methode to create server
const server = http.createServer(app);


//declare port
const port=process.env.port || 3000;


//declare public folder for express module
app.use(express.static(path.join('public')));


//declare ejs as engine for express module
app.set({
    "view engine": "ejs"
});

//declare client routes module
const clientRoutes = require("./routes/client-routes");
//declare client routes for express module
app.use(clientRoutes);



//declare client routes module
const adminRoutes = require('./routes/admin-routes');
//declare client routes for express module
app.use( "/admin" , adminRoutes);


//declare 404 page
app.use("" , (req, res)=>{
res.render(path.join(__dirname , "public" , "views" , "404.ejs"));
});

//run server by 'server' object
server.listen(port ,(err)=>{
if(err) throw err;
else log(`server is running on port ${port}`);
});


