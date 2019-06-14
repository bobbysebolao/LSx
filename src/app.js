const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const sendActionPlan = require("./sendActionPlan");
const fetchSuccessData = require("./getSuccessStories");

require("env2")("./.env");

const app = express();

app.disable("x-powered -by");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get("/express_backend", (req, res) => {
  res.send({ express: " YOUR BACKEND IS CONNECTED TO REACT" });
});

app.get("/success-data", (req, res) => {

  fetchSuccessData() 
  .then(response => {
    res.send(response)})
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.post("/send", (req, res, next) => {
  var content = "";
  req.on("data", function(data) {
    // Append data.
    content += data;
  });
  req.on("end", function() {
    // Assuming, we're receiving JSON, parse the string into a JSON object to return.
    var data = JSON.parse(content);
    console.log("jump up and down", data);
    sendActionPlan(data.name, data.email);
  });

  console.log("header", req);
  // insert rest of form inputs
});

app.set("PORT", process.env.PORT || 9000);

module.exports = app;
