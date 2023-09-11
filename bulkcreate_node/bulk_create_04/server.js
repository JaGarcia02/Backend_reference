const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const db = require("./models");
const port = process.env.PORT || 8888;

app.use(express.json());

db.sequelize
  .sync()
  .then(() => {
    app.listen(
      (port,
      () => {
        console.log(`Server is running on port: ${port}`);
        console.log(`Database Host: ${process.env.Database_Host}`);
        console.log(`Database Username: ${process.env.Database_Username}`);
      })
    );
  })
  .catch((erorr) => {
    console.log(erorr);
  });
