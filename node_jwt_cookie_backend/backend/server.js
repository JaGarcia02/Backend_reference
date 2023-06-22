const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 6969;
const {
  notFound,
  errorHandler,
} = require("./middleware/errorhandler_middleware");
const DatabaseConnection = require("./config/connection");
const UserRoute = require("./routes/user_routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/test", UserRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server port: ${port}`);
  DatabaseConnection();
});
