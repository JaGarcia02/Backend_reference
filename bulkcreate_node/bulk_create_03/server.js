const express = require("express");
const app = express();
const db = require("./models");
const { company } = require("./models");

const data1 = require("./data/MOCK_DATA.json");

app.get("/select", (req, res) => {
  res.send("Select");
});

app.get("/insert", (req, res) => {
  company.bulkCreate(data1).catch((err) => {
    if (err) {
      res.send(err);
    }
  });
  res.send("data inserted");
});

db.sequelize
  .sync()
  .then((req) => {
    app.listen(2001, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
