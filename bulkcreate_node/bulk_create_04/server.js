const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const db = require("./models");
const port = process.env.PORT || 8888;
const TimekeepingRouter = require("./routes/timekeeping_dtr_route");

app.use(express.json());
app.use(cors());

app.use("/api", TimekeepingRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(
      (port,
      () => {
        console.log(`Server is running on port: ${port}`);
      })
    );
  })
  .catch((erorr) => {
    console.log(erorr);
  });
