const db = require("../config/db_connection");

const ViewAllCustomer = async (req, res) => {
  db.query("SELECT * FROM tbl_customers", [], (err, data) => {
    return res.status(200).json(data);
  });
};

const AddCustomer = async (req, res) => {
  const { name, budget } = req.body;
  db.query(
    "INSERT INTO tbl_customers (`customer_name`,`customer_budget`)VALUES(?,?)",
    [name, budget],
    (err, data) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res.status(200).json({ message: "Data Inserted" });
      }
    }
  );
};

const TransactionPurchaseCustomer = async (req, res) => {
  const { prodPrice, customerID, prodQty, prodID } = req.body;
  try {
    db.query(
      `UPDATE tbl_inventory,tbl_customers SET customer_budget = customer_budget - product_price * ${prodQty} , product_quantity = product_quantity - ${prodQty}  WHERE tbl_inventory.id = ${prodID} AND tbl_customers.id = ${customerID};`,
      [prodQty, prodID, customerID],
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

module.exports = { ViewAllCustomer, AddCustomer, TransactionPurchaseCustomer };
