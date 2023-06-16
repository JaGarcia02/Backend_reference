const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};
const createGoals = async (req, res) => {
  try {
    if (!req.body.text) {
      res.status(401);
      throw new Error("Please add a text in the text field!");
    }
    res.status(200).json({ message: "Create goals" });
  } catch (error) {
    throw new Error(error);
  }
};
const updateGoals = (req, res) => {
  res.status(200).json({ message: "Update goals" });
};
const deleteGoals = (req, res) => {
  res.status(200).json({ message: "Delete goals" });
};

module.exports = {
  getGoals,
  createGoals,
  updateGoals,
  deleteGoals,
};
