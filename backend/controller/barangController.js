const Barang = require("../models/Barang");

exports.getAll = async (req, res) => {
  res.json(await Barang.find());
};

exports.getById = async (req, res) => {
  res.json(await Barang.findById(req.params.id));
};

exports.create = async (req, res) => {
  res.json(await Barang.create(req.body));
};

exports.update = async (req, res) => {
  res.json(
    await Barang.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );
};

exports.delete = async (req, res) => {
  await Barang.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
