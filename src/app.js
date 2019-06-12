const express = require("express");
const path = require("path");

const app = express();

app.set("PORT", process.env.PORT || 9000);

module.exports = app;
