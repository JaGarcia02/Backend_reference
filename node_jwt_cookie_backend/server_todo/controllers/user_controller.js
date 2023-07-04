const User = require("../models/user_models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create_user = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user_data = await User.findOne({ email: email });
    if (!name || !email || !password) {
      console.log("Please complete all fields below!");
      return res
        .status(400)
        .json({ message: "Please complete all fields below!" });
    }
    if (user_data) {
      console.log("Email is already taken, please try again!");
      return res
        .status(400)
        .json({ message: "Email is already taken, please try again!" });
    }
    const salt = await bcrypt.genSaltSync(15);
    const HashedPassword = await bcrypt.hashSync(password, salt);

    const new_user = await User.create({
      name: name,
      email: email,
      password: HashedPassword,
    });
    console.log(new_user);
    return res
      .status(200)
      .json({ message: "User created!", payload: new_user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const login_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user_data = await User.findOne({ email: email });
    if (!email || !password) {
      console.log("Please enter email and password!");
      return res
        .status(400)
        .json({ message: "Please enter email and password!" });
    }
    if (!user_data) {
      console.log("User not found, plaease try again! ");
      return res
        .status(400)
        .json({ message: "User not found, plaease try again!" });
    }
    if (user_data && (await bcrypt.compareSync(password, user_data.password))) {
      const Token = generate_token(
        user_data._id,
        user_data.name,
        user_data.email,
        user_data.password
      );
      return res
        .status(200)
        .cookie("user_token", Token, {
          expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 1),
        })
        .json({
          message: "User Logged-in",
          payload: {
            id: user_data._id,
            name: user_data.name,
            email: user_data.email,
            password: user_data.password,
          },
          token: Token,
        });
    } else {
      return res.status(401).json({ message: "Wrong password!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const logout_user = async (req, res) => {
  res.cookie("user_token", null, { expires: new Date(0) });
  return res.status(200).json({ message: "User has logged-out." });
};

const get_token = async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(401).json({ message: "No Token!" });
  }
  try {
    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    const token_data = await User.findById(decoded_token._id);
    if (!token_data) {
      return res.status(401).json({ message: "Not Found!" });
    } else {
      return res.status(200).json(decoded_token);
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Not User Authorized!" });
  }
};

const generate_token = (_id, name, email, password) => {
  return jwt.sign(
    {
      _id,
      name,
      email,
      password,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

module.exports = { create_user, login_user, get_token, logout_user };
