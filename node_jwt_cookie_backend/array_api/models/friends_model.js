const mongoose = require("mongoose");

const friendsSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    friends_list: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("friendsList", friendsSchema);
