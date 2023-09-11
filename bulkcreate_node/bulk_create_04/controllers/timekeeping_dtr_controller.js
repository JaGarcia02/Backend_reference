const { timekeeping_dtr_model } = require("../models");

const dtr_submit = async (req, res) => {
  try {
    const { cutoff, time_in, break_out, break_in, time_out, bioId } = req.body;
    await timekeeping_dtr_model.bulkCreate({
      Cutoff: cutoff,
      Time_in: time_in,
      Time_break_out: break_out,
      Time_break_in: break_in,
      Time_out: time_out,
      BioID: bioId,
    });
    const created_data = await timekeeping_dtr_model.findAll({});
    return res.status(200).json(created_data);
  } catch (error) {
    return res.status(400).json(error);
  }
};
