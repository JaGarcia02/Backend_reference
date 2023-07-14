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
    const { recipe, recipe_id } = req.body;

    const dish_data = await Recipe.findById({ _id: id });

    // if (!dish_data) {
    //   return res.status(401).json({ message: "Dish not found!" });
    // } else {
    //   dish_data.recipe.push(recipe_id, recipe);
    // }
    // await dish_data.save();

    // const recipeList = await Promise.all(
    //   dish_data.recipe.map((id) => Recipe.findById(id))
    // );

    // const formatedRecipeList = recipeList.map(({ recipe_id, recipe }) => {
    //   return { recipe_id, recipe };
    // });
    // return res.status(200).json(formatedRecipeList);

    // if (!dish_data) {
    //   return res.status(401).json({ message: "Dish not found!" });
    // }
    // await Recipe.findByIdAndUpdate(
    //   { _id: id },
    //   { recipe: { recipe: recipe, recipe_id: recipe_id } }
    // );
    // const recipe_list = await Recipe.findById({ _id: id });

    if (!dish_data) {
      return res.status(401).json({ message: "Dish not found!" });
    } else {
      dish_data.recipe.push({ recipe_id: recipe_id, recipe: recipe });
    }
    await dish_data.save();

    return res.status(200).json(dish_data.recipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const Delete_Recipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { recipe_id } = req.body;

    const dish_data = await Recipe.findById({ _id: id });

    // if (
    //   dish_data.recipe.filter((fil) => fil.recipe_id == recipe_id)[0]
    //     .recipe_id == recipe_id
    // ) {

    //   // return res.status(200).json({
    //   //   message: "This is the data!",
    //   //   payload: dish_data.recipe.filter((fil) => fil.recipe_id == recipe_id),
    //   // });
    // } else {
    //   console.log("error!");
    // }

    const newArray = dish_data.recipe.filter(
      (fil) => fil.recipe_id !== recipe_id
    );

    const test = await Recipe.updateOne({ recipe: newArray });
    return res.status(200).json(test);
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

module.exports = { Create_Dish, Add_Recipe, Get_Dish, Delete_Recipe };

/*

    In this concept you need for just to add multiple array in the database,
    this will be abble to save muliple object in the frontend.

    const Delete_Recipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { recipe_id } = req.body;

    const dish_data = await Recipe.findById({ _id: id });

    // if (
    //   dish_data.recipe.filter((fil) => fil.recipe_id == recipe_id)[0]
    //     .recipe_id == recipe_id
    // ) {
    //   console.log("this is the data");
    //   return res.status(200).json({
    //     message: "This is the data!",
    //     payload: dish_data.recipe.filter((fil) => fil.recipe_id == recipe_id),
    //   });
    // } else {
    //   console.log("error!");
    // }
    const test = await Recipe.updateOne({ recipe: recipe_id });

    return res.status(200).json(
      // dish_data.recipe.filter((fil) => fil.recipe_id == recipe_id)[0]
      //   .recipe_id
      test
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

*/
