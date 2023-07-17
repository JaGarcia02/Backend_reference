const Todo = require("../models/todo_models");

const create_task = async (req, res) => {
  const { task, id } = req.body;
  try {
    await Todo.create({ task_id: id, task: task });
    const created_task = await Todo.find({});
    return res.status(200).json(created_task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const task_all = async (req, res) => {
  const task_list = await Todo.find({});
  return res.status(200).json(task_list);
};

module.exports = {
  create_task,
  task_all,
};
