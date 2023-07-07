const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const DatabaseConnection = require("./config/connection");
const port = process.env.PORT || 1111;
const UserRoute = require("./routes/user_route");
const TodoRoute = require("./routes/todo_route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/user/api", UserRoute);
app.use("/todo/api", TodoRoute);

app.listen(port, () => {
  DatabaseConnection();
  console.log(`Server port: ${port}`.underline.blue);
});
