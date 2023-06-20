const express = require("express");
const router = express.Router();
const { create_book } = require("../controllers/book_controller");
const { token_validation } = require("../middleware/userToken_middleware");

router.post("/create-book", token_validation, create_book);

module.exports = router;
