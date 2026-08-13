exports.getLogin = (req, res, next) => {
    res.render("auth/login",{
        Title: "login page",
        currentPage: "login",
        isLoggedIn:false
    })
};


exports.postLogin = (req, res, next) => {
    req.isLoggedIn=true;
    res.redirect("/home-list");

};