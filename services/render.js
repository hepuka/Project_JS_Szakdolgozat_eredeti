const axios = require("axios");
const passport = require("passport");
const path = require("path");

exports.login = (req, res) => {
  res.render("login");
};

/* exports.htmllogin = (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
};

exports.htmlchief = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/chief.html"));
}; */

/* exports.htmltables = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/tables.html"));
}; */

exports.loginout = (req, res) => {
  res.render("login");
};

exports.logout = (req, res) => {
  req.logout();
  res.render("/users/login");
};

exports.loginpost = (req, res) => {
  passport.authenticate("local", function (err, user) {
    if (err) {
      res.redirect("/login");
    } else {
      if (!user) {
        res.redirect("/login");
      } else {
        req.login(user, function (err) {
          if (err) {
            res.redirect("/login");
          } else {
            if (user.role == "Admin") {
              res.redirect("/chief");
            }
            if (user.role == "Alap") {
              res.redirect("/tables");
            }
          }
        });
      }
    }
  })(req, res);
};

exports.tables = (req, res) => {
  res.render("tables", { users: req.user });
};
exports.add_user = (req, res) => {
  res.render("add_user", { users: req.user });
};

exports.admin = (req, res) => {
  res.render("admin", { users: req.user });
};

exports.warning = (req, res) => {
  res.render("warning");
};

exports.chief = (req, res) => {
  res.render("chief", { users: req.user });
};

exports.add_ital = (req, res) => {
  res.render("add_ital", { users: req.user });
};

exports.add_kave = (req, res) => {
  res.render("add_kave", { users: req.user });
};

exports.add_suti = (req, res) => {
  res.render("add_suti", { users: req.user });
};

exports.table_1_order = (req, res) => {
  res.render("table_1_order", { users: req.user });
};

exports.insertOrder = (req, res) => {
  var d = new Date();
  var t = d.getTime();
  var counter = t;
  counter += 1;

  var order = new Order();
  order.vegosszeg = req.body.total;
  order.orderid = counter;
  order.time = Date.now();
  order.save((err, doc) => {
    if (!err) {
      res.redirect("/tables");
    } else {
      console.log("Error insertOrder: " + err);
    }
  });
};

exports.insertOrder2 = (req, res) => {
  var d = new Date();
  var t = d.getTime();
  var counter = t;
  counter += 1;

  var order2 = new Order();
  order2.vegosszeg = req.body.total;
  order2.orderid = counter;
  order2.time = Date.now();
  order2.save((err, doc) => {
    if (!err) {
      res.redirect("/tables");
    } else {
      console.log("Error insertOrder: " + err);
    }
  });
};

exports.table_2_order = (req, res) => {
  res.render("table_2_order", { users: req.user });
};

exports.usermindrender = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("admin", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.deleteid = (req, res) => {
  Order.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      res.redirect("/orders");
    } else {
      console.log("Error in delete: " + err);
    }
  });
};

exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/users/login");
  }
};

exports.onlyforadmin = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.redirect("/warning");
  }
  next();
};
