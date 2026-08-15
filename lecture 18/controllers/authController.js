exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    Title: "login page",
    currentPage: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  // req.session.isLoggedIn=true;
  // res.cookie("isLoggedIn",true);
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  console.log(req.url);
  req.session.destroy(()=>{
      res.redirect("/login");
  })
};
