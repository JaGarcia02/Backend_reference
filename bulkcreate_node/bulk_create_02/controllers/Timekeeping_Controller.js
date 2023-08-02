const {
  timekeeping_data,
  timekeeping_dtr,
  timekeeping_cutoff,
} = require("../models");

const create_cutoff = async (req, res) => {
  try {
    const { cutoff } = req.body;
    await timekeeping_cutoff.create({ cutOffID: cutoff });
    const cutoff_data = await timekeeping_cutoff.findAll({});
    return res.status(200).json(cutoff_data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const view_all_cutoff = async (req, res) => {
  try {
    const cutoff_data = await timekeeping_cutoff.findAll({});
    return res.status(200).json(cutoff_data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Create DTR
const create_dtr_cutoff = async (req, res) => {
  try {
    const { dtr } = req.body;
    await timekeeping_dtr.bulkCreate(dtr);
    const dtr_cutoff_data = await timekeeping_dtr.findAll({});
    return res.status(200).json(dtr_cutoff_data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// View DTR
const view_dtr_data = async (req, res) => {
  try {
    const dtr_cutoff_data = await timekeeping_dtr.findAll({});
    return res.status(200).json(dtr_cutoff_data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Summary
const create_summary = async (req, res) => {
  try {
    const { summaryData } = req.body;
    const created_summary = await timekeeping_data.bulkCreate(summaryData);
    return res.status(200).json(created_summary);
  } catch (error) {
    console.log(error);
  }
};

// Summary
const view_summary_data = async (req, res) => {
  try {
    const summary_data = await timekeeping_data.findAll({});
    return res.status(200).json(summary_data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const view_all_timekeeping_data = async (req, res) => {
  try {
    const dtr = await timekeeping_dtr.findAll({});
    const timekeeping_summary = timekeeping_data.findAll({});
    const obj = { data: { summary: timekeeping_summary, dtr: dtr } };
    return res.status(200).json(obj);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  create_cutoff,
  view_all_cutoff,
  create_dtr_cutoff,
  view_dtr_data,
  view_all_timekeeping_data,
  create_summary,
  view_summary_data,
};
