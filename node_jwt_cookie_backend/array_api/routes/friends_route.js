const express = require("express");
const router = express.Router();
const { create_user, addFriend } = require("../controllers/friends_controller");

router.post("/create-user", create_user);
router.post("/add-friend", addFriend);

module.exports = router;
