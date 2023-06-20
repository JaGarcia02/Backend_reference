const express = require("express");
const router = express.Router();
const { create_book, delete_book } = require("../controllers/book_controller");
const { token_validation } = require("../middleware/userToken_middleware");
const { userRole_Authorization } = require("../middleware/roleAuth_middleware");

router.post("/create-book", token_validation, create_book);
router.delete(
  "/delete-book/:id",
  token_validation,
  userRole_Authorization,
  delete_book
);

module.exports = router;
