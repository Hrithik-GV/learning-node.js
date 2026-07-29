 exports.getaddHome=(req, res, next) => {
  res.render("addHome", { Title: "add-Home page" ,currentPage:'addHome'});
};

const registeredHome = [];

exports.postaddHome=(req, res, next) => {
  console.log(req.body);
  registeredHome.push(req.body);
  res.render("home-added", { Title: "home-added page" });
};

exports.getHome=(req,res,next)=>{
console.log(registeredHome);
res.render('home',{registeredHome :registeredHome,Title:'Home Page',currentPage:'Home'});
};

