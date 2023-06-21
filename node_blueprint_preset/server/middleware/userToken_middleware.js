const jwt = require("jsonwebtoken");
const User = require("../models/user_model");
const assyncHandler = require("express-async-handler");

const token_validation = assyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token
      token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user Token
      req.user_data = await User.findById(decoded.user_dataId); // <-- this is the decoded data from the token
      next();
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: "Invalid Token / Token not recognize!" });
    }
  }
  if (!token) {
    console.log("No Token Found!");
    return res.status(401).json({ message: "No Token Found!" });
  }
});

module.exports = { token_validation };
