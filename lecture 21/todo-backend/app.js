//core module
const path = require("path");

//external module
const express = require("express");
const cors=require('cors')
const { default: mongoose, Collection } = require("mongoose");
const DB_URL ="mongodb+srv://hrithikgv5_db_user:KZF2RWlraBFTTdOd@airbnb.vue5kr9.mongodb.net/todo";

//local module
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/error");
const todoItemRouter=require('./routes/todoItemRouter')
const app = express();

//log every page url and method
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});  

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));
app.use(express.json());
app.use(cors());

app.use("/api/todo",todoItemRouter);
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
