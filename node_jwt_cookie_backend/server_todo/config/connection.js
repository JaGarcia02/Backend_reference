const mongoose = require("mongoose");

const database_connection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Status: Connected".underline.magenta);
  } catch (error) {
    console.log(error);
    return resizeBy.status(500).json({ message: error.message });
  }
};

module.exports = database_connection;
