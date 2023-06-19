const assyncHandler = require("express-async-handler");
const User = require("../models/user_model");

/* desc: Login User 
   method: POST request
   access: Public
*/
const login_user = assyncHandler(async (req, res) => {
  try {
    return res.status(200).json({ message: "Login User" });
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
    return res.status(200).json({ message: "Logout User" });
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

    // create user function //
    const user_data = await User.create({
      name: name,
      email: email,
      password: password,
      role: role,
    });
    return res.status(200).json({ message: "Create User", payload: user_data });
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
