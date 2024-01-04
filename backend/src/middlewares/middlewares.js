const cors = require("cors");
const bodyParser = require('body-parser');
const express = require("express");

const configureMiddleware = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.json());
};

module.exports = configureMiddleware;
