const db = require("../config/db_connection");

const ViewAllInventory = async (req, res) => {
  db.query("SELECT * FROM tbl_inventory", [], (err, data) => {
    return res.status(200).json(data);
  });
};

const AddToInventory = async (req, res) => {
  const { prodName, prodQty, prodPrice } = req.body;
  db.query(
    "INSERT INTO tbl_inventory (`product_name`,`product_quantity`,`product_price`) VALUES(?,?,?)",
    [prodName, prodQty, prodPrice],
    (err, data) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res.status(200).json({ message: "Data Inserted" });
      }
    }
  );
};

const TransactionPurchase = async (req, res) => {
  const { prodQty, id } = req.body;
  try {
    db.query(
      "UPDATE tbl_inventory SET product_quantity = product_quantity - ? WHERE id = ?",
      [prodQty, id],
      (err, data) => {
        if (err) {
          return res.status(500).json({ message: err });
        } else {
          return res.status(200).json(data);
        }
      }
    );
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  ViewAllInventory,
  AddToInventory,
  TransactionPurchase,
};
