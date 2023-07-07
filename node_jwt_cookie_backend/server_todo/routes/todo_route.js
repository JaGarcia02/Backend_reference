const express = require("express");
const router = express.Router();
const {
  create_todo,
  view_todoList_byUser,
  update_todo,
} = require("../controllers/todo_controller");
const { token_validation } = require("../middleware/userToken_middleware");

router.get("/viewTask-byUser-task", view_todoList_byUser);
router.put("/update-task/:id", update_todo);
router.post("/create-task", create_todo);

module.exports = router;
