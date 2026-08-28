require("dotenv").config();
//core module
const path = require("path");

//external module
const express = require("express");
const cors=require('cors')
const { default: mongoose, Collection } = require("mongoose");


//local module
const connectDB=require('./config/db');
const rootDir = require("./utils/pathUtils");
const errorController = require("./controllers/error");
const todoItemRouter=require('./routes/todoItemRouter'); 

const app = express();

connectDB()

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
const PORT = process.env.PORT||3001;
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });

