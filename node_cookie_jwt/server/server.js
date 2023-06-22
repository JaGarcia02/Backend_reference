const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("Hello Worlds");
});

app.listen(4888);
