const jwt = require("jsonwebtoken");
const { user_model } = require("../models");
const assyncHandler = require("express-async-handler");

const token_validation = assyncHandler(async (req, res, next) => {
  let Token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token
      Token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(Token, process.env.JWT_SECRET);

      req.user_dataId = await user_model.findById(decoded._id);
      next();
    } catch (error) {
      console.log(error);
      throw new Error("Invalid token!");
    }
    if (!Token) {
      console.log("No Token!");
      return res.status(401).json({ message: "No Token!" });
    }
  }
});

module.exports = { token_validation };
