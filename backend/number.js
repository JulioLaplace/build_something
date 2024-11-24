const mongoose = require("mongoose");

// Définir le schéma du nombre
const numberSchema = new mongoose.Schema({
  value: { type: Number, required: true, default: 0 },
});

// Exporter le modèle
module.exports = mongoose.model("Number", numberSchema);
