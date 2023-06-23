import asyncHandler from "express-async-handler";
import User from "../models/user_models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const create_new_user = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const check_email = await User.findOne({ email: email });
    if (!name || !email || !password || !role) {
      console.log("Please complete all fields below!");
      return res
        .status(401)
        .json({ message: "Please complete all fields below!" });
    }
    if (check_email) {
      console.log("Email is already taken, please try again!");
      return res
        .status(401)
        .json({ message: "Email is already taken, please try again!" });
    }
    const salt = await bcrypt.genSaltSync(10);
    const HashedPassword = await bcrypt.hashSync(password, salt);

    const new_user = await User.create({
      name: name,
      email: email,
      password: HashedPassword,
      role: role,
    });
    return res.status(200).json({ status: "User Created", payload: new_user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
});

const login_user = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user_data = await User.findOne({ email: email });
    if (!email || !password) {
      console.log("Please complete all fields below!");
      return res
        .status(401)
        .json({ message: "Please complete all fields below!" });
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
          sameSite: "strict",
          expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 1),
        })
        .json({
          status: "User Logged-in",
          payload: {
            _id: user_data._id,
            name: user_data.name,
            email: user_data.email,
            role: user_data.role,
            token: Token,
          },
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
    throw new Error(error);
  }
});

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

export { create_new_user, login_user };
