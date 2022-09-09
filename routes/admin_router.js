const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
require("../model/ordermodel_table1");

const {
  dashboardViewupdateuser,
} = require("../controller/dashboardController");
const { dashboardVieworders } = require("../controller/dashboardController");
const { dashboardViewproducts } = require("../controller/dashboardController");

route.get("/", services.login);
route.get("/users/login", services.loginout);
route.post("/users/login", services.loginpost);
route.get("/users/logout", services.logout);
route.get(
  "/update-user",
  services.ensureAuthenticated,
  services.onlyforadmin,
  services.update_user,
  dashboardViewupdateuser
);
route.get(
  "/orders",
  services.ensureAuthenticated,
  services.onlyforadmin,
  dashboardVieworders
);
route.get(
  "/products",
  services.ensureAuthenticated,
  dashboardViewproducts,
  services.onlyforadmin
);
route.get(
  "/chief",
  services.ensureAuthenticated,
  services.onlyforadmin,
  services.chief
);
route.get(
  "/admin",
  services.ensureAuthenticated,
  services.onlyforadmin,
  services.usermindrender,
  services.admin
);
route.get(
  "/add-user",
  services.ensureAuthenticated,
  services.onlyforadmin,
  services.add_user
);
route.get("/warning", services.ensureAuthenticated, services.warning);
route.get("/orders/delete/:id", services.deleteid);
route.get(
  "/add-ital",
  services.ensureAuthenticated,
  services.onlyforadmin,
  services.add_ital
);
route.get(
  "/add-kave",
  services.ensureAuthenticated,
  services.onlyforadmin,
  services.add_kave
);
route.get(
  "/add-suti",
  services.ensureAuthenticated,
  services.onlyforadmin,
  services.add_suti
);

//APIs
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

module.exports = route;
