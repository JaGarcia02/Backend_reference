const Todo = require("../models/todo_models");
const User = require("../models/user_models");
const jwt = require("jsonwebtoken");

const create_todo = async (req, res) => {
  try {
    const { task, user } = req.body;
    if (!task) {
      console.log("Please complete field below!");
      return res.status(400).json({ message: "Please complete field below!" });
    }
    await Todo.create({ task: task, user: user });
    const todo_data = await Todo.find({});
    return res
      .status(200)
      .json({ message: "Todo created!", payload: todo_data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const update_todo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const task_data = await Todo.findById({ _id: id });
    if (!task) {
      return res.status(400).json({ message: "Please enter task!" });
    }
    if (!task_data) {
      return res.status(400).json({ message: "Undefined ID" });
    }
    await Todo.findByIdAndUpdate({ _id: id }, { task: task });
    const updated_todo = await Todo.findOne({ _id: id });

    return res
      .status(200)
      .json({ message: "Task updated!", payload: updated_todo });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const view_todoList_byUser = async (req, res) => {
  try {
    const { user } = req.body;
    if (!user) {
      return res.status(400).json({ message: "User Not Authorized!" });
    }
    const sorted_task = await Todo.find({ user: user });
    return res.status(200).json(sorted_task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { create_todo, view_todoList_byUser, update_todo };
