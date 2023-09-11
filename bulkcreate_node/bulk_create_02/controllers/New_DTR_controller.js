const { new_DTR } = require("../models");

const dtr_submit = async (req, res) => {
  try {
    const { dtr } = req.body;
    await new_DTR.bulkCreate(dtr);
    const created_data = await new_DTR.findAll({});
    return res.status(200).json(created_data);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const dtr_viewAll = async (req, res) => {
  try {
    const created_data = await new_DTR.findAll({});
    return res.status(200).json(created_data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  dtr_submit,
  dtr_viewAll,
};
