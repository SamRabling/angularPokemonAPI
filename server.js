const express = require("express");
const app = express();
var path = require("path");

app.use(express.static(__dirname + '/AngularApp/dist/AngularApp'));

app.listen(5000, function () {
    console.log("listening on port 5000");
});