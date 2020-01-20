const express = require("express");
const routes = require("./data/routers");

const db = require("./data/dbConfig.js");

const server = express();

server.use(express.json());

server.use(routes);

module.exports = server;
