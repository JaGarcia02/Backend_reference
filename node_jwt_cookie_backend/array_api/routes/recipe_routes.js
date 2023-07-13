const express = require("express");
const router = express.Router();
const {
  Create_Dish,
  Add_Recipe,
  Get_Dish,
} = require("../controllers/recipe_controller");

router.post("/add-dish", Create_Dish);
router.put("/add-recipe/:id", Add_Recipe);
router.get("/view-recipe", Get_Dish);

module.exports = router;
