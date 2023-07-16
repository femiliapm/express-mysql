const { bootcampModel } = require("../models");

exports.insertData = (req, res) => {
  const data = { ...req.body };
  const query = "INSERT INTO bootcamp SET ?";

  bootcampModel.insertBootcamp(res, query, data);
};

exports.getAllData = (req, res) => {
  const query = "SELECT * FROM bootcamp";

  bootcampModel.getBootcamps(query, res);
};

exports.getById = (req, res) => {
  const id = req.params.id;
  const querySearch = "SELECT * FROM bootcamp WHERE id = ?";

  bootcampModel.getBootcampById(querySearch, id, res);
};

exports.updateData = (req, res) => {
  const data = { ...req.body };
  const id = req.params.id;
  const querySearch = "SELECT * FROM bootcamp WHERE id = ?";
  const queryUpdate = "UPDATE bootcamp SET ? WHERE id = ?";

  bootcampModel.updateBootcamp(querySearch, id, res, queryUpdate, data);
};

exports.deleteData = (req, res) => {
  const id = req.params.id;
  const querySearch = "SELECT * FROM bootcamp WHERE id = ?";
  const queryDelete = "DELETE FROM bootcamp WHERE id = ?";

  bootcampModel.deleteBootcamp(querySearch, id, res, queryDelete);
};
