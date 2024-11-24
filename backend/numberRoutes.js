const express = require("express");
const Number = require("./number");
const router = express.Router();

// Route pour récupérer le nombre actuel
router.get("/", async (req, res) => {
  try {
    let number = await Number.findOne();
    if (!number) {
      // Si aucun nombre en DB, créer une valeur par défaut
      number = new Number({ value: 0 });
      await number.save();
    }
    res.status(200).json({ value: number.value });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération du nombre." });
  }
});

// Route pour appliquer une opération
router.post("/update", async (req, res) => {
  const { operation } = req.body;

  try {
    let number = await Number.findOne();
    if (!number) {
      number = new Number({ value: 0 });
    }

    // Appliquer l'opération
    if (operation.startsWith("+")) {
      number.value += parseFloat(operation.slice(1));
    } else if (operation.startsWith("-")) {
      number.value -= parseFloat(operation.slice(1));
    } else if (operation.startsWith("*")) {
      number.value *= parseFloat(operation.slice(1));
    } else if (operation.startsWith("/")) {
      const divisor = parseFloat(operation.slice(1));
      if (divisor === 0) {
        return res
          .status(400)
          .json({ error: "Division par zéro non permise." });
      }
      number.value /= divisor;
    } else {
      return res.status(400).json({ error: "Opération invalide." });
    }

    await number.save();
    res.status(200).json({ value: number.value });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du nombre." });
  }
});

module.exports = router;
