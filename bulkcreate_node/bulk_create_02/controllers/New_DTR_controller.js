const { new_DTR } = require("../models");

const dtr_submit = async (req, res) => {
  try {
    const { cutoff, time_in, break_out, break_in, time_out, bioId } = req.body;
    await new_DTR.create({
      Cutoff: cutoff,
      Time_in: time_in,
      Time_break_out: break_out,
      Time_break_in: break_in,
      Time_out: time_out,
      BioID: bioId,
    });
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
