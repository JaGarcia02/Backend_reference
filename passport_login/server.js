const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

// view engine
app.set("view-engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// data
const users = [];

// routes
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Ja" });
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (error) {
    res.redirect("/register");
  }
  console.log(users);
});

app.listen(3005);
