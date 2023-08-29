const express = require("express");
const app = express();
const http = require("http");
const dotenv = require("dotenv").config();
const db = require("./models");
const port = 9999;
const { data2 } = require("./models");
const data2_data = require("./data/data2.json");

app.get("/test", (req, res) => {
  return res.send("Hello");
});

app.post("/insert", async (req, res) => {
  await data2.bulkCreate({ data2_data }).catch((error) => {
    if (error) {
      console.log(error);
    }
  });
  return res.send("insert");
});
// app.listen(1111);

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`server port: ${port}`));
});
