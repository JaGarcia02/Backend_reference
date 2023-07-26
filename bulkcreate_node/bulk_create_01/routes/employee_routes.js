const express = require("express");
const router = express.Router();
const { bulk_create, view_data } = require("../controller/employee_controller");

router.post("/bulk-create", bulk_create);
router.get("/get-data", view_data);

module.exports = router;
