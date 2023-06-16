const express = require("express");
const router = express.Router();
const {
  ViewAllInventory,
  AddToInventory,
  TransactionPurchase,
} = require("../controllers/inventory_controllers");

router.get("/view-all-inventory", ViewAllInventory);
router.post("/add-to-inventory", AddToInventory);
router.put("/transaction-purchase", TransactionPurchase);

module.exports = router;
