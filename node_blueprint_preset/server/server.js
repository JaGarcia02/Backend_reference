const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 6969;
const app = express();
const { notFound, errorHandler } = require("./middleware/error_middleware");
const UserRoute = require("./routes/user_route");

/* User Routes */
app.use("/api/user", UserRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
