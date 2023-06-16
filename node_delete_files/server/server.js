const { error } = require("console");
const fs = require("fs");

fs.writeFileSync("myfile.txt", "This file has a content of files");

//--------synchronous---------//

// try {
//   fs.unlinkSync("myfile1.txt");
// } catch (error) {
//   console.log("error occured:", error);
// }

//--------asynchronous---------//
fs.unlink("myfile.txt", function (err) {
  if (err) {
    console.log("Error Occured:", err);
    return;
  } else {
    console.log("File Deleted Successfully");
  }
});
