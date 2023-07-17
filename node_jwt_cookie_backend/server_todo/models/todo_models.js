const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todo_test", todoSchema);
