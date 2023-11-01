const express = require('express');
const morgan = require('morgan');
const Informant = require("./Informant");
const api = require('./api/apiRouter')
const bodyParser = require('body-parser');
//const expressSession = require('express-session')
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


//Logging
app.use(morgan('dev', {
    stream: {
        write(message) {Informant.http(message);}
    }
}))


app.use("/api", api.router);


//NOT FOUND
app.use((req, res) => {
    //config.notFound(req, res)
});

//ERROR
app.use((error,req,res,next) => {
    res.status(500);
    Informant.error(error);
})

module.exports = app;