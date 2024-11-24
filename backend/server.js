const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const numberRoutes = require("./numberRoutes");

// Initialiser l'application Express
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Connexion à MongoDB
const mongoURI = "mongodb://localhost:27017/mathdb"; // Remplace par ton URI MongoDB si nécessaire
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connecté !"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Utiliser les routes
app.use("/api/number", numberRoutes);

// Lancer le serveur
const PORT = 3001;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
