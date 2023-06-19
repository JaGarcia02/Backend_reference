const assyncHandler = require("express-async-handler");

/* desc: Login User 
   method: POST request
   access: Public
*/
const login_user = assyncHandler(async (req, res) => {
  try {
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }

  //   return res.status(200).json({ message: "Login" });
});

module.exports = { login_user };
