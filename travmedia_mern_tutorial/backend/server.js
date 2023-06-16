const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const GoalRoutes = require("./routes/goal_routes");
const app = express();
const { errorHandler } = require("./middleware/errorHandler");
const DatabaseConnection = require("./configs/database_connection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", GoalRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  DatabaseConnection();
});
