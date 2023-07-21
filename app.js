// library
require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

// routing
const bootcampsRouter = require("./src/routes/bootcamp-router");
const bookRouter = require("./src/routes/book-router");

// app
const app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "*", // or specific url
  })
);

// routing
app.use("/api/bootcamp", bootcampsRouter);
app.use("/api/books", bookRouter);

module.exports = app;
