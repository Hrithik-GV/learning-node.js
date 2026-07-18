//core module
//const http = require('http');

const express = require("express"); //external module

const userRequest = require("./user"); //local module

const app = express();

app.get("/",(req, res, next) => {
  console.log(`first middleware ${req.url} ${req.method}`);
  res.send(`<h3>sending the first middleware</h3>`)
  // next();
});
app.get("/about",(req, res, next) => {
  console.log(`second middleware ${req.url} ${req.method}`);
  res.send(`<h3>sending the second middleware <h3>`);
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
