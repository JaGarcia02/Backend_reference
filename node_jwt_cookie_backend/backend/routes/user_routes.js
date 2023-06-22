const express = require("express");
const router = express.Router();
const { login_user, create_user } = require("../controllers/user_controller");

router.post("/login", login_user);
router.post("/create", create_user);

module.exports = router;
