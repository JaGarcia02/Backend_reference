const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema(
  {
    dish: {
      type: String,
      // required: true,
    },
    recipe: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("recipeList", recipeSchema);
