exports.dashboardView = (req, res)=>{
  res.render("_headerlog", {
    users: req.user
  });
     
};

exports.dashboardView = (req, res)=>{
  res.render("_header", {
    users: req.user
  });
     
};

exports.dashboardView = (req, res)=>{
  res.render("chief", {
    users: req.user
  });
     
};

