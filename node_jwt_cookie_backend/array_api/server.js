const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 7888;
const DatabaseConnection = require("./config/connection");
const FriendsRouter = require("./routes/friends_route");
const RecipeRouter = require("./routes/recipe_routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", FriendsRouter);
app.use("/foods", RecipeRouter);

app.listen(port, () => {
  DatabaseConnection();
  console.log(`Server port: ${port}`);
});
