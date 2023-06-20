const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    book_title: {
      type: String,
      required: true,
    },
    book_description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("book_backend_setup", userSchema);
