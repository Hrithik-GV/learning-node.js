exports.getLogin = (req, res, next) => {
    res.render("auth/login",{
        Title: "login page",
        currentPage: "login",
        isLoggedIn:false
    })
};


exports.postLogin = (req, res, next) => {
    req.isLoggedIn=true;
    res.cookie("isLoggedIn",true);
    res.redirect("/");
};

exports.postLogout=(req,res,next)=>{
    console.log(req.url);
    res.cookie("isLoggedIn",false);
    res.redirect("/login")
}