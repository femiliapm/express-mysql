const { bootcampModel } = require("../models");

exports.insertData = (req, res) => {
  const data = { ...req.body };

  bootcampModel.insertBootcamp(res, data);
};

exports.getAllData = (req, res) => {
  bootcampModel.getBootcamps(res);
};

exports.getById = (req, res) => {
  const id = req.params.id;

  bootcampModel.getBootcampById(id, res);
};

exports.updateData = (req, res) => {
  const data = { ...req.body };
  const id = req.params.id;

  bootcampModel.updateBootcamp(id, res, data);
};

exports.deleteData = (req, res) => {
  const id = req.params.id;

  bootcampModel.deleteBootcamp(id, res);
};
