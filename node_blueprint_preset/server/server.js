const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 6969;
const app = express();
const { notFound, errorHandler } = require("./middleware/error_middleware");
const UserRoute = require("./routes/user_route");
const BookRoute = require("./routes/book_route");
const DatabaseConnection = require("./configs/database_connection");

app.use(cors());
app.use(express.json()); // <-- this will allow to send json format in the postman when sending request
app.use(express.urlencoded({ extended: true })); // <-- this will allow to send form-data in the postman when sending a request

/* User Route */
app.use("/api/user", UserRoute);
/* Book Route */
app.use("/api/book", BookRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  DatabaseConnection();
});
