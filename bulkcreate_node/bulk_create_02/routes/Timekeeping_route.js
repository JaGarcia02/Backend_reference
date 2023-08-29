const express = require("express");
const router = express.Router();
const {
  create_cutoff,
  view_all_cutoff,
  create_dtr_cutoff,
  view_all_timekeeping_data,
  view_dtr_data,
  create_summary,
  view_summary_data,
} = require("../controllers/Timekeeping_Controller");

router.post("/create-cutoff", create_cutoff);
router.post("/create-dtr", create_dtr_cutoff);
router.post("/create-summary", create_summary);

router.get("/view-all-cutoff", view_all_cutoff);
router.get("/view-dtr-data", view_dtr_data);
router.get("/view-timekeepingdata", view_all_timekeeping_data);
router.get("/view-summarydata", view_summary_data);

module.exports = router;
