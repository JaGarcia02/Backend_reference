const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8888;
const db = require("./models");
const TimekeepingRouter = require("./routes/Timekeeping_route");

app.use(cors());
app.use(express.json());

app.use("/api/timekeeping", TimekeepingRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server port: ${PORT}`);
  });
});
