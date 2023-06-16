const express = require("express");
const router = express.Router();
const {
  ViewAllCustomer,
  AddCustomer,
  TransactionPurchaseCustomer,
} = require("../controllers/customer_controllers");

router.get("/view-all-customer", ViewAllCustomer);
router.post("/add-customer", AddCustomer);
router.put("/customer-purchase", TransactionPurchaseCustomer);

module.exports = router;
