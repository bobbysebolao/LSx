const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compresion = require("compression");
const helmet = require("helmet");
const { check, validationResult } = require("express-validator/check");

const sendActionPlan = require("./sendActionPlan");
const fetchSuccessData = require("./getSuccessStories");
const fetchExperimentsData = require("./getExperiments");
const fetchDeepDive = require("./getDeepDive");

require("env2")("./.env");

const app = express();

const middleware = [
  helmet(),
  compresion(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  express.static(path.join(__dirname, "..", "client", "build"))
];
app.use(middleware);

app.disable("x-powered -by");

app.get("/express_backend", (req, res) => {
  res.send({ express: " YOUR BACKEND IS CONNECTED TO REACT" });
});

app.get("/success-data", (req, res) => {
  fetchSuccessData().then(response => {
    res.send(response);
  });
});

app.get("/deep-dive-data", (req, res) => {
  fetchDeepDive().then(response => {
    res.send(response);
  });
});
app.get("/experiments-data", (req, res) => {
  fetchExperimentsData().then(response => {
    res.send(response);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.post("/send",
(req, res, next) => {

  
  var content = "";
  req.on("data", function(data) {
    // Append data.
    content += data;
  });
  req.on("end",  function() {
    // Assuming, we're receiving JSON, parse the string into a JSON object to return.
    var data = JSON.parse(content);

    
      check("name")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("You should input your name"),
      check("email")
        .not()
        .isEmpty()
        .escape()
        .withMessage("Your should input a email")

        const errors = validationResult(data);

        if (!errors.isEmpty()) {
          return res.status(422).jsonp(errors.array());
        } else {
          sendActionPlan(data.name, data.email, data.answers)
      .then(result => res.send(result))
      .catch(err => res.send({ failure: 500, error: err }));
        }
      }
    )
    
   
  });
  // insert rest of form inputs


app.set("PORT", process.env.PORT || 9000);

module.exports = app;
