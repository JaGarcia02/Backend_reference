const { time_dtr, time_keeping } = require("../models");

const save_cutoff = async (req, res) => {
  try {
    const { timekeeping, dtr } = req.body;
    const new_data = await time_keeping.bulkCreate(timekeeping);
    await time_dtr.bulkCreate(dtr);
    let test;
    console.log({ test: { new_data: new_data, time_dtr: dtr } });
    return res.status(200).json(new_data);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

const view_data2 = async (req, res) => {
  try {
    const dtr = await time_dtr.findAll();
    const summary = await time_keeping.findAll();
    const obj = { data: { summary: summary, dtr: dtr } };

    return res.status(200).json(obj);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

module.exports = { save_cutoff, view_data2 };
