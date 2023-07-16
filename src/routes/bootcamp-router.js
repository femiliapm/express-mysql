const express = require("express");
const router = express.Router();
const { bootcamp } = require("../controllers");

// insert data
router.post("/", bootcamp.insertData);

// read data
router.get("/", bootcamp.getAllData);

// find by id
router.get("/:id", bootcamp.getById);

// update data
router.put("/:id", bootcamp.updateData);

// delete data
router.delete("/:id", bootcamp.deleteData);

module.exports = router;
