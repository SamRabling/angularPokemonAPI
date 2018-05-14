const express = require("express");
const app = express();

app.use(express.static(__dirname + '/AngularApp/dist/AngularApp'));

app.listen(8000);