let connect = require("connect");
const app = connect();

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function goodBye(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Good bye");
}

app.use(logger);
app.use("/hello", helloWorld);
app.use("/good", goodBye);
app.listen(3000);
console.log("server running at http://localhost:3000");
