const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

const uploads = multer({ dest: __dirname + "/uploads" });

app.post("/uploads", uploads.array("files"), (req, res) => {
  console.log(req.body);
  console.log(req.files);
  restart.json({ status: "files received" });
});

app.listen(5000, function () {
  console.log("Server running on port 5000");
});
