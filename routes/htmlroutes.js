const express = require("express");
const route = express.Router();
const services = require("../services/render");

route.get("/", services.htmllogin);
route.get("/chief", services.htmlchief);
module.exports = route;
