const Recipe = require("../models/recipe_models");

const Create_Dish = async (req, res) => {
  try {
    const { dish } = req.body;
    const new_dish = await Recipe.create({ dish: dish });
    return res.status(200).json(new_dish);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const Add_Recipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { recipe } = req.body;

    const dish_data = await Recipe.findById({ _id: id });
    if (!dish_data) {
      return res.status(401).json({ message: "Dish not found!" });
    }
    await Recipe.findByIdAndUpdate({ _id: id }, { recipe: recipe });
    const recipe_list = await Recipe.findById({ _id: id });

    res.status(200).json(recipe_list);

    return console.log(recipe_list.recipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const Get_Dish = async (req, res) => {
  try {
    const recipe_data = await Recipe.find({});
    return res.status(200).json(recipe_data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { Create_Dish, Add_Recipe, Get_Dish };

/*

    In this concept you need for just to add multiple array in the database,
    this will be abble to save muliple object in the frontend.


*/
