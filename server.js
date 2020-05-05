//These are my dependencies
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends.js");

///Here is where we start the express server.
var app = express();
var PORT = 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public/"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
    return res.json(friends.friends);
})

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    friends.friends.push(newFriend);
})


app.listen(process.env.PORT || PORT, function() {
    console.log("Listening on port: http://localhost:" + PORT);
})

module.exports = {
    app: app,
    path: path
}

//I was not able to complete this assignment
//I left out two things. I was not able to make the modal show up on the webpage and I was not able to get to the logic for the
//page to compare the results from the user filling out the form to another user the previously filled out the survey.