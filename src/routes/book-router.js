const express = require("express");
const { book } = require("../controllers");
const router = express.Router();

// insert data book
router.post("/", book.createBook);

// get all data
router.get("/", book.getBooks);

// get by id
router.get("/:id", book.getBookById);

module.exports = router;
