const express = require("express");
const router = express.Router();
const { bulk_create, view_data } = require("../controller/employee_controller");
const {
  save_cutoff,
  view_data2,
} = require("../controller/timekeeping_controller");

// Employee
router.post("/bulk-create", bulk_create);
router.get("/get-data", view_data);

// Timekeeping
router.get("/get-data-timekeeping", view_data2);
router.post("/bulk-create-timekeeping", save_cutoff);

module.exports = router;
