const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 4444;
const TestRouter = require("./routes/employee_routes");

app.use(cors());
app.use(express.json());

app.use("/test", TestRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
