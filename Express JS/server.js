const express = require("express");
const app = express();

let logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/hello", (req, res) => {
  res.send("in hello page");
});

app.get("/goodbye", (req, res) => {
  res.send("Good bye");
});

console.log("server running at https://localhost:3000");
app.listen(3000);
