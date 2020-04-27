var server = require("../../server.js");

server.app.get("/", function(req, res) {
    res.sendFile(server.path.join(__dirname, "../public/home.html"));
});

server.app.get("/survey", function(req, res) {
    res.sendFile(server.path.join(__dirname, "../public/survey.html"));
});