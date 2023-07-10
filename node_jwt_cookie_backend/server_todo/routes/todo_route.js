const express = require("express");
const router = express.Router();
const {
  create_todo,
  view_todoList_byUser,
  update_todo,
  view_allTask,
  delete_task,
  view_taskById,
} = require("../controllers/todo_controller");
const { token_validation } = require("../middleware/userToken_middleware");

router.get("/viewTask-all", view_allTask);
router.get("/viewTask-byId/:id", view_taskById);
router.get("/viewTask-byUser-task/:user", view_todoList_byUser);
// router.post("/viewTask-byUser-task", view_todoList_byUser);
router.put("/update-task/:id", update_todo);
router.post("/create-task", create_todo);
router.delete("/delete-task/:id/:user", delete_task);

module.exports = router;
