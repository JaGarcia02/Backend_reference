const assyncHandler = require("express-async-handler");
const Book = require("../models/book_model");

/* desc: Create Book 
   method: POST request
   access: Private
*/
const create_book = assyncHandler(async (req, res) => {
  try {
    const { book_title, book_description } = req.body;

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

    //create book function //
    const book_data = await Book.create({
      book_title: book_title,
      book_description: book_description,
      author: req.user_data.name,
      user_id: req.user_data._id,
    });

    //to view the result of the created user in the console //
    if (book_data) {
      console.log(book_data);
      return res.status(200).json({
        message: "Create Book",
        payload: {
          _id: book_data._id,
          book_title: book_data.book_title,
          book_description: book_data.book_description,
          author: req.user_data.name,
          user_id: req.user_data._id,
        },
      });
    }

    console.log(req.user_dataId.name);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/* desc: Update Book 
   method: POST request
   access: Private
*/
const update_book = assyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { book_title, book_description } = req.body;
    await Book.findByIdAndUpdate({
      _id: id,
      book_title: book_title,
      book_description: book_description,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

/* desc: Delete Book 
   method: POST request
   access: Private
*/
const delete_book = assyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete({ _id: id });
    return res.status(200).json({ message: "Book Deleted!" });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = { create_book, delete_book, update_book };

/*

The middleware can also serve data in the controller, check book_create,
instead of decoding it in the frontend we can use the middleware decoded token
and use it to fill the data needed to be sent 

*/
