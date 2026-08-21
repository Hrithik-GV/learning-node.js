const { check, validationResult } = require("express-validator");
const User=require('../models/user')
const bcrypt=require('bcryptjs')

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    Title: "login page",
    currentPage: "login",
    isLoggedIn: false,
    errors: [],
    oldInput: { email: "" },
   user:{}
  });
};

exports.postLogin =  async(req, res, next) => {
const {email,password}=req.body;
const user= await User.findOne({email});
  if(!user){
    return res.status(422).render("auth/login",{
      Title: "login page",
    currentPage: "login",
    isLoggedIn: false,
    errors:['user does not exist'],
    oldInput:{email},
    user:{}
    })
  }

  const isMatch= await bcrypt.compare(password,user.password);
  if(!isMatch){
    return res.status(422).render("auth/login",{
      Title: "login page",
    currentPage: "login",
    isLoggedIn: false,
    errors:['wrong password'],
    oldInput:{email}, 
    user:{}
    })
  }

  req.session.isLoggedIn = true;
  req.session.user = JSON.parse(JSON.stringify(user));
    req.session.save(()=>{
      res.redirect("/")
    })
  
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(()=>{
      res.redirect("/login");
  })
};

exports.getSignup=(req,res,next)=>{
  res.render("auth/signup",{
    Title: "signup",
    currentPage: "signup",
    isLoggedIn: false,
    errors:[],
    oldInput:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",userType:"",terms:""},
    user:{}
  });

}
exports.postSignup =[
  check("firstName")
  .trim()
  .isLength({min:2})
  .withMessage("first name must be at least 2 characters long")
  .matches(/^[a-zA-Z]+$/)
  .withMessage("first name must contain only letters"),

  check("lastName")
  .trim()
  .matches(/^[a-zA-Z]+$/)
  .withMessage("last name must contain only letters"),

  check("email")
  .isEmail()
  .withMessage("please enter a valid email address")
  .normalizeEmail(),

  check("password")
  .isLength({min:8})
  .withMessage("password must be at least 8 characters long")
  .matches(/[A-Z]/)
  .withMessage("password must contain at least one uppercase letter")
  .matches(/[a-z]/)
  .withMessage("password must contain at least one lowercase letter")
  .matches(/[0-9]/)
  .withMessage("password must contain at least one number")
  .matches(/[\W]/)
  .withMessage("password must contain at least one special character")
  .trim(),

  check("confirmPassword")
  .trim()
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("passwords do not match");
    }
    return true;
  }),
  ,
  check('userType')
  .notEmpty()
  .withMessage('user type is required')
  .isIn(['guest','host'])
  .withMessage('user type must be either guest or host'),

  check('terms')
  .notEmpty()
  .withMessage('you must accept the terms and conditions')
  .custom((value,{req})=>{
    if(value!=="on"){
      throw new Error("you must accept the terms and conditions");
    }
    return true;
  }),
  

  (req, res, next) => {

    const {firstName,lastName,email,password,confirmPassword,userType,terms}=req.body;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).render("auth/signup",{ 
        Title:"signup",
        currentPage:"signup",
        isLoggedIn:false,
        errors:errors.array().map(error=>error.msg),
        oldInput:{firstName,lastName,email,password,confirmPassword,userType,terms},
        user:{}
      });
    }
    
    bcrypt.hash(password,12)
    .then((hashedPassword)=>{
      const user=new User({firstName,lastName,email,password:hashedPassword,userType})
      return user.save()
    }).then(()=>{
      res.redirect("/login")
    }).catch((err)=>{
     return res.status(422).render("auth/signup",{ 
        Title:"signup",
        currentPage:"signup",
        isLoggedIn:false,
        errors:[err.message],
        oldInput:{firstName,lastName,email,password,confirmPassword,userType,terms},
        user:{}
      });
    })  
}]


