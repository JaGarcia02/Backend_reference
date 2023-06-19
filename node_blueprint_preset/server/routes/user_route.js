const express = require("express");
const router = express.Router();
const {
  login_user,
  create_user,
  logout_user,
  get_all_users,
  get_user_profile,
  update_user,
  delete_user,
} = require("../controllers/user_controller");

router.post("/login", login_user);
router.post("/register", create_user);
router.post("/logout", logout_user);
router.get("/view-all-users", get_all_users);
router.get("/view-user/:id", get_user_profile);
router.put("/update-user/:id", update_user);
router.delete("/delete-user/:id", delete_user);

module.exports = router;
