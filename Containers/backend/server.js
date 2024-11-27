const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const numberRoutes = require("./numberRoutes");

// Initialize Express
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Connection to MongoDB
const DBHOST = process.env.DB_HOST || "mongodb";
const mongoURI = "mongodb://" + DBHOST + ":27017/mathdb";
console.log("Trying to connect to MongoDB at", mongoURI);
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connecté !"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

// Routes
app.use("/api/number", numberRoutes);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Start the server
const PORT = 8082;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
