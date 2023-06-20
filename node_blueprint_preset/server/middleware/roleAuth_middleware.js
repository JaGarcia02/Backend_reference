const jwt = require("jsonwebtoken");
const User = require("../models/user_model");
const assyncHandler = require("express-async-handler");

const userRole_Authorization = assyncHandler(async (req, res, next) => {
  if (req.user_data.role !== "admin") {
    return res.status(401).json({ message: "You are not admin!" });
  } else {
    next();
  }
});

module.exports = { userRole_Authorization };
