const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    task_id: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    task_status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("test_todo", todoSchema);
