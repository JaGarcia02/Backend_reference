const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;
const InventoryRoutes = require("./routes/invenroty_routes");
const CustomerRoutes = require("./routes/customer_routes");

app.use(express.json());
app.use(cors());

app.use("/api/inventory", InventoryRoutes);
app.use("/api/customer", CustomerRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
