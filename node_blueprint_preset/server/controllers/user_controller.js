const assyncHandler = require("express-async-handler");
const User = require("../models/user_model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generate_token");

/* desc: Login User 
   method: POST request
   access: Public
*/
const login_user = assyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    // find email if existing
    const user_data = await User.findOne({ email: email });

    // check input fields
    if (!email) {
      console.log("Email input is empty!, please try again.");
      throw new Error("Email input is empty!, please try again.");
    }
    if (!password) {
      console.log("Password input is empty!, please try again.");
      throw new Error("Password input is empty!, please try again.");
    }
    if (!email && !password) {
      console.log("Email & Password fields is empty!, please try again.");
      throw new Error("Email & Password fields is empty!, please try again.");
    }

    // cheking if email is valid
    if (!user_data) {
      console.log("Email not found, please try again!");
      throw new Error("Email not found, please try again!");
    }
    // password validation
    if (user_data && (await bcrypt.compareSync(password, user_data.password))) {
      generateToken(
        res,
        user_data._id,
        user_data.name,
        user_data.email,
        user_data.role
      );
      return res.status(200).json({ message: "Login User" });
    } else {
      res.status(401).json({ message: "Wrong password!" });
      throw new Error("Wrong password!");
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/* desc: Logout User 
   method: POST request
   access: Private
*/
const logout_user = assyncHandler(async (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return res.status(200).json({ message: "User has Logged-out." });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/* desc: Create User 
   method: POST request
   access: Public
*/
const create_user = assyncHandler(async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existing_email = await User.findOne({ email: email });

    // existing email condition is true //
    if (existing_email) {
      console.log("Email is already existing, please try again!");
      throw new Error("Email is already existing, please try again!");
    }

    // hashing the password  //
    const salt = await bcrypt.genSalt(10);
    const HashedPassword = await bcrypt.hash(password, salt);

    // create user function //
    const user_data = await User.create({
      name: name,
      email: email,
      password: HashedPassword,
      role: role,
    });

    // to view the result of the created user in the console //
    if (user_data) {
      console.log(user_data);
      return res.status(200).json({
        message: "Create User",
        payload: {
          _id: user_data._id,
          name: user_data.name,
          email: user_data.email,
          role: user_data.role,
        },
      });
    } else {
      console.log("Error user creation!");
      throw new Error("Error user creation!");
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/* desc: Get All Users 
   method: GET request
   access: Public
*/
const get_all_users = assyncHandler(async (req, res) => {
  try {
    return res.status(200).json({ message: "View All Users" });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/* desc: Get User 
   method: GET request
   access: Private
*/
const get_user_profile = assyncHandler(async (req, res) => {
  try {
    return res.status(200).json({ message: "View User" });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/* desc: Update User 
   method: Put request
   access: Private
*/
const update_user = assyncHandler(async (req, res) => {
  try {
    return res.status(200).json({ message: "Update User" });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/* desc: Delete User 
   method: delete request
   access: Private
*/
const delete_user = assyncHandler(async (req, res) => {
  try {
    return res.status(200).json({ message: "Delete User" });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = {
  login_user,
  create_user,
  logout_user,
  get_all_users,
  get_user_profile,
  update_user,
  delete_user,
};
