const mongoose = require("mongoose");

// Number Schema
const numberSchema = new mongoose.Schema({
  value: { type: Number, required: true, default: 0 },
});

// Number Model
module.exports = mongoose.model("Number", numberSchema);
