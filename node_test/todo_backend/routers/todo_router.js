const express = require("express");
const router = express.Router();
const {
  create_task,
  task_all,
  delete_task,
} = require("../controllers/todo_controller");

router.post("/create-task", create_task);
router.get("/get-task", task_all);
router.delete("/delete-task/:task_id", delete_task);

module.exports = router;
