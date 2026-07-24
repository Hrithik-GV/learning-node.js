//core module
const http = require("http");

//local modeule
const contactRouter=require('./routes/contactRouter');
const homeRouter=require('./routes/homeRouter');
const errorRoutes=require("./routes/errorRoutes");

//external module
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req,res,next)=>{
      console.log( req.url, req.method);
      next();
})
app.use(homeRouter);
// app.use(express.urlencoded());
app.use(contactRouter);

app.use(errorRoutes);


const PORT = 5001;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
