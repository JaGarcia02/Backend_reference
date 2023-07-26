const { testing } = require("../models");

const bulk_create = async (req, res) => {
  try {
    const { excel_file } = req.body;
    const new_data = await testing.bulkCreate(excel_file);
    return res.status(200).json(new_data);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

const view_data = async (req, res) => {
  try {
    const saved_data = await testing.findAll();
    return res.status(200).json(saved_data);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

module.exports = { bulk_create, view_data };
