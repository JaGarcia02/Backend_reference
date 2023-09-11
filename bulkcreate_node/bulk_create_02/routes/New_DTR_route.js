const express = require("express");
const router = express.Router();
const {
  dtr_submit,
  dtr_viewAll,
} = require("../controllers/New_DTR_controller");

router.post("/dtr_submit", dtr_submit);
router.get("/dtr_viewAll", dtr_viewAll);

module.exports = router;
