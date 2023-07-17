const express = require("express");
const router = express.Router();
const { create_task, task_all } = require("../controllers/todo_controller");

router.post("/create-task", create_task);
router.get("get-task", task_all);

module.exports = router;
