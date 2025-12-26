const mongoose = require("mongoose");

const barangSchema = new mongoose.Schema({
  nama: String,
  harga: Number,
  stok: Number,
});

module.exports = mongoose.model("Barang", barangSchema);
