const express = require("express");
const routes = require("./data/routers");

// const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.use(routes);

server.get("/", (req, res) => {
  res.send("<h2>Server is Working</h2>");
});

module.exports = server;
