const jwt = require("jsonwebtoken");

// token payload
const generateToken = (
  res,
  user_dataId,
  user_dataName,
  user_dataEmail,
  user_dataRole
) => {
  // signing token to cookie
  const token = jwt.sign(
    { user_dataId, user_dataName, user_dataEmail, user_dataRole },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
  return res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

module.exports = generateToken;

/*
 The user_dataId and user_data etc is in the controller, when the user is created the response is the user_data
 see full code in the controller folder to see the current flow of this function.

 You can add multiple data in the token payload, just make your naming convention right!
*/
