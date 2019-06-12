const { sendActionPlan } = require("./sendActionPlan");
const app = require("./app");
require("env2")("./config.env");

app.listen(app.get("PORT"), () => {
  console.log("App running on port", app.get("PORT"));
});

app.get("/express_backend", (req, res) => {
  res.send({ express: " YOUR BACKEND IS CONNECTED TO REACT" });
});

app.post("/send", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  // insert rest of form inputs

  sendActionPlan("henners", "hrmstockdale@gmail.com");
});
