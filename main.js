const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer"); // v1.0.5
const parse = require('csv-parse');
const fs = require("fs");
var verifyCode; 
app.set("port", process.env.PORT || 8080);
app.use(express.static( __dirname + "/ContactFrom_v2/ContactFrom_v1"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.get("/", async (req, res) => {
  console.log("yo")
	res.status(200);
  console.log("hi")
	res.set("Content-Type", "text/html");
	res.sendFile(path.join(__dirname + "/ContactFrom_v2/ContactFrom_v1/index.html"));
})
app.get("/verify", async (req, res) => {
  console.log("yoo")
	res.status(200);
  console.log("hiss")
	res.set("Content-Type", "text/html");
	res.send(path.join(__dirname + "/ContactFrom_v2/ContactFrom_v1/css/"));
})
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});