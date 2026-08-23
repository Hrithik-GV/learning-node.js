//core module
const path = require("path");

//external module
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoDBStore = require("connect-mongodb-session")(session);
const { default: mongoose, Collection } = require("mongoose");
const DB_URL ="mongodb+srv://hrithikgv5_db_user:KZF2RWlraBFTTdOd@airbnb.vue5kr9.mongodb.net/airbnb";
const multer=require('multer');

//local module
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const { authRouter } = require("./routes/authRouter");
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/error");


const app = express();

// ejs setup
app.set("view engine", "ejs");
app.set("views", "views");

//log every page url and method
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

const store = new mongoDBStore({
  uri: DB_URL,
  collection: "sessions",
});

//multer (file uploads) 

const randomString=(length)=>{
  const result='';
  const characters='abcdefghijklmnopqrstuvwxyz';
  for(let i=0;i<characters.length;i++){
    result=result+characters.charAt(Math.floor(Math.random()*characters.length))
  }
  return result;
}

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb:(null,"uploads/")
  },
  filename:(req,file,cb)=>{
    cb:(null,randomString(5) + '-'+file.originalname);
  }
})

const multerOptions={
  storage
}

app.use(express.urlencoded());
app.use(multer(multerOptions).single('photo'))
app.use(express.static(path.join(rootDir, "public")));


//sessions
store.on("error", (error) => {
  console.log("Session store error:", error);
});

app.use(
  session({
    secret: "session secret key",
    resave: false,
    saveUninitialized: true,
    store: store,
  }),
);

app.use(storeRouter);

app.use("/host", hostRouter);

app.use(authRouter);

app.use(errorController.pageNotFound);


//connections
const PORT = 3001;
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("connecting to mongodb");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to mongodb", err);
  });
