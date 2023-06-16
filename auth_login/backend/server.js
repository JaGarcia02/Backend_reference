const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const users = [];

// route request = GET request
app.get("/users", (req, res) => {
  res.json(users);
});

// route request = POST request
app.post("/users", async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt();

    // from the req.body.password = request -> from the body of the page -> getting the value of password
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // <- this will hash the passowrd || 10 is the default value of the bcrypt // <- this is the hashed password

    // console.log(salt);
    // console.log(hashedPassword);

    // hashedPassword is the whole value of the req.body.password = setting the password plain text to encrypted
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch (error) {
    res.status(500).send();
  }
});

// route request login = POST request
app.post("/users/login", async (req, res) => {
  const user = users.find((user) => user.name === req.body.name);
  if (user == null) {
    return res.status(400).send("Cannot find user");
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      // <- from request body of the page -> getting the password -> comparing it to the user.password in the users password stored in the database
      res.send("Success!");
    } else {
      res.send("Failed");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(4000);
