const express = require("express");
const router = express.Router();
const {
  create_user,
  login_user,
  get_token,
  logout_user,
} = require("../controllers/user_controller");

router.post("/create-user", create_user);
router.post("/login-user", login_user);
router.post("/check-token", get_token);

router.get("/logout-user", logout_user);

module.exports = router;
