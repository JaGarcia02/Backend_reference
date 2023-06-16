require("dotenv").config();

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
app.use(express.json());

// Data //
const posts = [
  {
    username: "Ja",
    title: "Post1",
  },

  {
    username: "Kevin",
    title: "Post2",
  },

  {
    username: "Jolo",
    title: "Post3",
  },
];

// Routes //
app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

// MiddleWare / /
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
// MiddleWare //

// app.post("/login", (req, res) => {
//   // Auth User
//   const username = req.body.username;
//   const user = { name: username };

//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//   res.json({ accessToken: accessToken });
// });

// Routes //

app.listen(3003);
