const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
const cors = require("cors")
const routes = require('./Utils/routes')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

new routes(app).appRoutes()

const port = process.env.PORT || 8000;
app.listen(port)

console.log('App is Listening on port '+ port)