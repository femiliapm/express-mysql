// library
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// routing
const bootcampsRouter = require("./src/routes/bootcamp-router");
const bookRouter = require("./src/routes/book-router");

// app
var app = express();

// middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routing
app.use("/api/bootcamp", bootcampsRouter);
app.use("/api/books", bookRouter);

module.exports = app;
