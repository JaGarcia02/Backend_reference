const express = require("express");
const router = express.Router();
const {
  create_user,
  login_user,
  get_token,
} = require("../controllers/user_controller");

router.post("/create-user", create_user);
router.post("/login-user", login_user);
router.post("/check-token", get_token);

module.exports = router;
