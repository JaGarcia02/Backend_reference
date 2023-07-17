const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8888;
const DatabaseConnection = require("./configs/connection");
const TodoRouter = require("./routers/todo_router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", TodoRouter);

app.listen(port, () => {
  DatabaseConnection();
  console.log(`server is running on port: ${port}`);
});
