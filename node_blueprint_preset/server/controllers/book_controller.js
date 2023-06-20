const assyncHandler = require("express-async-handler");
const Book = require("../models/book_model");

/* desc: Create Book 
   method: POST request
   access: Private
*/
const create_book = assyncHandler(async (req, res) => {
  try {
    const { book_title, book_description, author, user_id } = req.body;

    // check fields //
    if (!book_title) {
      console.log("Book title is empty!, please try again.");
      throw new Error("Book title is empty!, please try again.");
    }
    if (!book_description) {
      console.log("Book description is empty!, please try again.");
      throw new Error("Book description is empty!, please try again.");
    }
    if (!book_title && !book_description) {
      console.log("Book title & Book description is empty!, please try again.");
      throw new Error(
        "Book title & Book description is empty!, please try again."
      );
    }

    // create book function //
    const book_data = await Book.create({
      book_title: book_title,
      book_description: book_description,
    });

    // to view the result of the created user in the console //
    if (book_data) {
      console.log(user_data);
      return res.status(200).json({
        message: "Create Book",
        payload: {
          _id: book_data._id,
          book_title: book_data.book_title,
          book_description: book_data.book_description,
        },
      });
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = { create_book };
