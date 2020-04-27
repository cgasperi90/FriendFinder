//These are my dependencies
var express = require("express");
var path = require("path");

///Here is where we start the express server.
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(process.env.PORT || PORT, function() {
    console.log("Listening on port: " + PORT);
})

module.exports = {
    app: app,
    path: path
}