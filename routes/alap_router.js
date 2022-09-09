const express = require("express");
const route = express.Router();
const services = require("../services/render");
const italcontroller = require("../controller/italcontroller");
const kavecontroller = require("../controller/kavecontroller");
const sutikontroller = require("../controller/suticontroller");
const ordertable1controller = require("../controller/ordertable1controller");
const ordercontroller = require("../controller/ordercontroller");
const mongoose = require("mongoose");
const Order = mongoose.model("Order");
require("../model/ordermodel_table1");

const { dashboardViewtables } = require("../controller/dashboardController");
const { dashboardViewtable_1 } = require("../controller/dashboardController");

route.get(
  "/tables",
  services.ensureAuthenticated,
  dashboardViewtables,
  services.tables
);
route.get("/table_1", services.ensureAuthenticated, dashboardViewtable_1);
route.get("/warning", services.ensureAuthenticated, services.warning);
route.get(
  "/table_1_order",
  services.ensureAuthenticated,
  services.table_1_order
);
route.post(
  "/table_1_order",
  services.ensureAuthenticated,
  services.insertOrder
);
route.get(
  "/table_2_order",
  services.ensureAuthenticated,
  services.table_2_order
);
route.post(
  "/table_2_order",
  services.ensureAuthenticated,
  services.insertOrder2
);

//APIs
route.post("/api/italok", italcontroller.create);
route.post("/api/kavek", kavecontroller.create);
route.get("/api/italok", italcontroller.find);
route.get("/api/kavek", kavecontroller.find);
route.get("/api/sutemenyek", sutikontroller.find);
route.post("/api/sutemenyek", sutikontroller.create);
route.get("/api/orders", ordercontroller.find);

module.exports = route;
