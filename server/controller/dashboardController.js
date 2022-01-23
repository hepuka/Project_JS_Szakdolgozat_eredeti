  exports.dashboardView = (req, res)=>{
    res.render("table_1_order", {
      users: req.user
    });
       
  };

  exports.dashboardView2 = (req, res)=>{
    res.render("table_2_order", {
      users: req.user
    });
       
  };

  exports.dashboardViewtables = (req, res)=>{
    res.render("tables", {
      users: req.user
    });
       
  };

  exports.dashboardViewtable_1 = (req, res)=>{
    res.render("table_1", {
      users: req.user
    });
       
  };

  exports.dashboardViewtable_2 = (req, res)=>{
    res.render("table_2", {
      users: req.user
    });
       
  };

  exports.dashboardViewchief = (req, res)=>{
    res.render("chief", {
      users: req.user
    });
       
  };

  exports.dashboardViewadduser = (req, res)=>{
    res.render("add_user", {
      users: req.user
    });
       
  }; 
  
  exports.dashboardViewadmin = (req, res)=>{
    res.render("admin", {
      users: req.user
    });
       
  };

  exports.dashboardVieworders = (req, res)=>{
    res.render("orders", {
      users: req.user
    });
       
  };

  exports.dashboardViewproducts = (req, res)=>{
    res.render("products", {
      users: req.user
    });
       
  };

  exports.dashboardViewaddital = (req, res)=>{
    res.render("add_ital", {
      users: req.user
    });
       
  };

  exports.dashboardViewaddkave = (req, res)=>{
    res.render("add_kave", {
      users: req.user
    });
       
  };

  exports.dashboardViewaddsuti = (req, res)=>{
    res.render("add_suti", {
      users: req.user
    });
       
  };

  exports.dashboardViewupdateuser= (req, res)=>{
    res.render("update_user", {
      user: req.user
    });
       
  };