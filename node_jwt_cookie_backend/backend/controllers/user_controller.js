const assyncHandler = require("express-async-handler");
const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login_user = assyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user_data = await User.findOne({ email: email });
    if (!email || !password) {
      console.log("Please enter email and password!");
      throw new Error("Please enter email and password!");
    }

    if (!user_data) {
      console.log("User not found, plaease try again! ");
      return res
        .status(400)
        .json({ message: "User not found, plaease try again!" });
    }
    if (user_data && (await bcrypt.compareSync(password, user_data.password))) {
      const Token = generateToken(
        user_data._id,
        user_data.name,
        user_data.email,
        user_data.role
      );

      return res
        .status(200)
        .cookie("user_access_token", Token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 1),
        })
        .json(Token);
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const create_user = assyncHandler(async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user_data = await User.findOne({ email: email });
    if (!name || !email || !password || !role) {
      console.log("Please complete all fields below!");
      throw new Error("Please complete all fields below!");
    }
    if (user_data) {
      console.log("Email is already taken, please try again!");
      res
        .status(400)
        .json({ message: "Email is already taken, please try again!" });
      throw new Error("Email is already taken, please try again!");
    }

    const salt = await bcrypt.genSaltSync(10);
    const HashedPassword = await bcrypt.hashSync(password, salt);

    const new_user = await User.create({
      name: name,
      email: email,
      password: HashedPassword,
      role: role,
    });
    console.log(new_user);
    return res
      .status(200)
      .json({ message: "User created!", payload: new_user });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

// token generation
const generateToken = (_id, name, email, role) => {
  return jwt.sign(
    {
      _id,
      name,
      email,
      role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "10m" }
  );
};

module.exports = { login_user, create_user };
