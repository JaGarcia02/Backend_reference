const Todo = require("../models/todo_models");

const create_task = async (req, res) => {
  const { task, id, status } = req.body;
  try {
    await Todo.create({ task_id: id, task: task, task_status: status });
    const created_task = await Todo.find({});
    return res.status(200).json(created_task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const delete_task = async (req, res) => {
  try {
    const { task_id } = req.params;
    const task_data = await Todo.findOne({ task_id: task_id });
    if (task_data) {
      await Todo.deleteOne({ task_id: task_data.task_id });
      const updated_list = await Todo.find({});
      return res.status(200).json(updated_list);
    }
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
  delete_task,
};
